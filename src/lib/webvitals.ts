/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-misused-promises, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call */
import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } from 'web-vitals/attribution';

import type { Metric } from 'web-vitals';

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

const getConnectionSpeed = (): string => {
	return 'connection' in navigator &&
		navigator.connection &&
		'effectiveType' in navigator.connection
		? navigator.connection['effectiveType']
		: '';
};

const sendToAnalytics = async (
	metric: Metric,
	options: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		params: { [s: string]: any } | ArrayLike<any>;
		path: string;
		analyticsId: string;
		debug?: boolean;
	}
): Promise<void> => {
	const page = Object.entries(options.params).reduce(
		(acc, [key, value]) => acc.replace(value, `[${key}]`),
		options.path
	);

	const body = {
		dsn: options.analyticsId,
		id: metric.id,
		page,
		href: location.href,
		event_name: metric.name,
		value: metric.value.toString(),
		speed: getConnectionSpeed()
	};

	if (options.debug) {
		console.log('[Analytics]', metric.name, JSON.stringify(body, null, 2));
	}

	const blob = new Blob([new URLSearchParams(body).toString()], {
		type: 'application/x-www-form-urlencoded'
	});
	if (navigator.sendBeacon) {
		navigator.sendBeacon(vitalsUrl, blob);
	} else {
		await fetch(vitalsUrl, {
			body: blob,
			method: 'POST',
			credentials: 'omit',
			keepalive: true
		});
	}
};

interface WebVitalsOptions {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	params: { [s: string]: any } | ArrayLike<any>;
	path: string;
	analyticsId: string;
	debug?: boolean;
	mode?: 'auto' | 'development' | 'production';
}
const webVitalsDefaultOptions: Partial<WebVitalsOptions> = {
	mode: 'development',
	debug: false
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const webVitals = (paramOptions: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	params: { [s: string]: any } | ArrayLike<any>;
	path: string;
	analyticsId: string;
	debug?: boolean;
	mode?: 'development' | 'production';
}): void => {
	const options = { ...webVitalsDefaultOptions, ...paramOptions };
	if (options.mode === 'development') {
		return;
	}

	try {
		onFID(async (metric) => await sendToAnalytics(metric, options));
		onTTFB(async (metric) => await sendToAnalytics(metric, options));
		onLCP(async (metric) => await sendToAnalytics(metric, options));
		onCLS(async (metric) => await sendToAnalytics(metric, options));
		onFCP(async (metric) => await sendToAnalytics(metric, options));
		onINP(async (metric) => await sendToAnalytics(metric, options));
	} catch (err) {
		console.error('[Analytics]', err);
	}
};

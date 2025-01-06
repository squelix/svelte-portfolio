export enum FitEnum {
	Crop = 'crop',
	Scale = 'scale',
	Fill = 'fill'
}

export interface ImageParams {
	width: number;
	height?: number;
	fit?: FitEnum;
	format?: 'avif' | 'webp' | 'png' | 'jpg';
	quality?: number;
}

export class ImageContentfulService {
	static #instance: ImageContentfulService;

	readonly #defaultQuality = 90;
	readonly #defaultFormat = 'avif';
	readonly #defaultFit = FitEnum.Fill;

	static getInstance(): ImageContentfulService {
		if (!ImageContentfulService.#instance) {
			ImageContentfulService.#instance = new ImageContentfulService();
		}

		return ImageContentfulService.#instance;
	}

	readonly optimize = (imageUrl: string, params: ImageParams): string => {
		this.#validateDimensions(params);

		const optimizeParams: string = this.#buildParams({
			quality: this.#defaultQuality,
			format: this.#defaultFormat,
			fit: this.#defaultFit,
			...params
		});

		return `${imageUrl}${optimizeParams}`;
	};

	readonly #validateDimensions = (params: ImageParams): void => {
		if (!params.width && !params.height) {
			throw new Error('dimensions should have at least a width or an height');
		}
	};

	readonly #buildParams = (params: ImageParams): string => {
		const fit = params.fit ? `fit=${params.fit}` : undefined;
		const width = `w=${params.width}`;
		const height = params.height ? `h=${params.height}` : undefined;
		const quality = params.quality ? `q=${params.quality}` : undefined;
		const format = params.format ? `fm=${params.format}` : undefined;

		return `?${[fit, width, height, quality, format].filter((q) => !!q).join('&')}`;
	};

	readonly getSrcSet = (
		imageUrl: string,
		params: ImageParams
	): { image1x: string; image2x: string; image3x: string; image4x: string } => {
		const image1x = this.optimize(imageUrl, {
			...params,
			width: params.width,
			...(params.height ? { height: params.height } : {})
		});
		const image2x = this.optimize(imageUrl, {
			...params,
			width: params.width * 2,
			...(params.height ? { height: params.height * 2 } : {})
		});
		const image3x = this.optimize(imageUrl, {
			...params,
			width: params.width * 3,
			...(params.height ? { height: params.height * 3 } : {})
		});
		const image4x = this.optimize(imageUrl, {
			...params,
			width: params.width * 4,
			...(params.height ? { height: params.height * 4 } : {})
		});

		return { image1x, image2x, image3x, image4x };
	};
}

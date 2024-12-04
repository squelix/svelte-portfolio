export enum FitEnum {
	Crop = 'c_crop',
	Scale = 'c_scale',
	Fill = 'c_fill'
}

export enum FormatEnum {
	Auto = 'f_auto'
}

export enum QualityEnum {
	Auto = 'q_auto',
	Q90 = 'q_90'
}

export interface ImageParams {
	width: number;
	height?: number;
	fit?: FitEnum;
	format?: FormatEnum;
	quality?: QualityEnum;
}

export class ImageCloudinaryService {
	static #instance: ImageCloudinaryService;

	readonly #defaultQuality = QualityEnum.Auto;
	readonly #defaultFormat = FormatEnum.Auto;
	readonly #defaultFit = FitEnum.Fill;
	readonly #splitter = '/image/upload/';

	static getInstance(): ImageCloudinaryService {
		if (!ImageCloudinaryService.#instance) {
			ImageCloudinaryService.#instance = new ImageCloudinaryService();
		}

		return ImageCloudinaryService.#instance;
	}

	readonly optimize = (imageUrl: string, params: ImageParams): string => {
		this.#validateDimensions(params);
		const imageUrlParts = imageUrl.split(this.#splitter);
		const beforeOptimizeUrl = `${imageUrlParts[0]}${this.#splitter}`;
		const afterOptimizeUrl = imageUrlParts[1];

		const optimizeParams: string = this.#buildParams({
			quality: this.#defaultQuality,
			format: this.#defaultFormat,
			fit: this.#defaultFit,
			...params
		});

		return `${beforeOptimizeUrl}${optimizeParams}/${afterOptimizeUrl}`;
	};

	readonly #validateDimensions = (params: ImageParams): void => {
		if (!params.width && !params.height) {
			throw new Error('dimensions should have at least a width or an height');
		}
	};

	readonly #buildParams = (params: ImageParams): string => {
		const fit = params.fit ? params.fit : '';
		const width = `,w_${params.width}`;
		const height = params.height ? `,h_${params.height}` : '';
		const quality = params.quality ? `/${params.quality}` : '';
		const format = params.format ? `/${params.format}` : '';

		return `${fit}${width}${height}${quality}${format}`;
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

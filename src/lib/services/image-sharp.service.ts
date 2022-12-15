import queryString from 'query-string';

export enum FitEnum {
	Cover = 'cover',
	Contain = 'contain',
	Fill = 'fill',
	Inside = 'inside',
	Outside = 'outside'
}

export enum FormatEnum {
	Jpeg = 'jpeg',
	Png = 'png',
	Webp = 'webp',
	Gif = 'gif',
	Jp2 = 'jp2',
	Tiff = 'tiff',
	Avif = 'avif',
	Raw = 'raw',
	Tile = 'tile'
}

export interface ImageParams {
	width: number;
	height?: number;
	fit?: FitEnum;
	format?: FormatEnum;
	quality?: number;
}

export class ImageSharpService {
	readonly #imageBaseUrl: string;
	readonly #defaultQuality = 90;

	constructor(imageBaseUrl: string) {
		// Remove trailing slash
		this.#imageBaseUrl = imageBaseUrl.replace(/\/$/, '');
	}

	readonly #getImageUrl = (imageUrl: string): string => {
		if (imageUrl.startsWith('http')) {
			return imageUrl;
		}

		if (imageUrl.startsWith('/')) {
			return `${this.#imageBaseUrl}${imageUrl}`;
		}

		return `${this.#imageBaseUrl}/${imageUrl}`;
	};

	readonly optimize = (imageUrl: string, params: ImageParams): string => {
		this.#validateDimensions(params);
		const queryParams = this.#buildWithQueryParams({
			quality: this.#defaultQuality,
			...params
		});

		return `${this.#getImageUrl(imageUrl)}?${queryParams}`;
	};

	readonly #validateDimensions = (params: ImageParams): void => {
		if (!params.width && !params.height) {
			throw new Error('dimensions should have at least a width or an height');
		}
	};

	readonly #buildWithQueryParams = (queryParams: Record<string, unknown>): string =>
		queryString.stringify(queryParams);

	readonly getSrcSet = (
		imageUrl: string,
		params: ImageParams
	): { image1x: string; image2x: string; image3x: string; image4x: string } => {
		const baseParams = { ...params, fit: FitEnum.Cover };
		const image1x = this.optimize(this.#getImageUrl(imageUrl), {
			...baseParams,
			width: params.width,
			...(params.height ? { height: params.height } : {})
		});
		const image2x = this.optimize(this.#getImageUrl(imageUrl), {
			...baseParams,
			width: params.width * 2,
			...(params.height ? { height: params.height * 2 } : {})
		});
		const image3x = this.optimize(this.#getImageUrl(imageUrl), {
			...baseParams,
			width: params.width * 3,
			...(params.height ? { height: params.height * 3 } : {})
		});
		const image4x = this.optimize(this.#getImageUrl(imageUrl), {
			...baseParams,
			width: params.width * 4,
			...(params.height ? { height: params.height * 4 } : {})
		});

		return { image1x, image2x, image3x, image4x };
	};
}

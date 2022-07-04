import queryString from 'query-string';

export interface PipelineOperation {
	operation: OperationTypes;
	ignore_failure: boolean;
	params: PipelineParams;
}

export enum OperationTypes {
	RESIZE = 'resize',
	EXTRACT = 'extract',
	SMARTCROP = 'smartcrop',
	CONVERT = 'convert',
	CROP = 'crop'
}

export enum GravityEnum {
	North = 'north',
	South = 'south',
	Centre = 'centre',
	East = 'east',
	West = 'west',
	Smart = 'smart'
}

export type PipelineParams = ExtractParams | ResizeParams | SmartCropParams | CropParams;

export interface ExtractParams extends CommonParams {
	top: number;
	left: number;
	areawidth: number;
	areaheight: number;
}

export interface GetSrcSetParams extends CommonParams, ImageDimensionsSrcSet {}
export interface ResizeParams extends ImageDimensions, CommonParams {}
export interface GetSrcSetSmartCropParams extends ImageDimensionsSrcSet, CommonParams {}
export interface SmartCropParams extends ImageDimensions, CommonParams {}
export interface CropParams extends ImageDimensions, CommonParams {
	gravity: GravityEnum;
}

export interface ImageDimensionsSrcSet {
	width: number;
	height?: number;
}

export interface ImageDimensions {
	width?: number;
	height?: number;
}

export interface CommonParams {
	type?: string;
	quality?: number;
}

/**
 * ImageService offers an interface for Imaginary API (https://github.com/h2non/imaginary)
 * The constructor url should be set dynamically according to the used environment
 */
export class ImageService {
	private readonly imaginaryUrl: string;

	constructor(url: string) {
		// Remove trailing slash
		this.imaginaryUrl = url.replace(/\/$/, '');
	}

	/**
	 * smartcrop should be used to crop an image without resizing its content
	 *
	 * Imaginary automatically detects the point of interest around which the crop should be executed,
	 * hence why no coordinates are necessary
	 *
	 * @param imageUrl
	 * @param smartCropParams
	 */
	smartcrop(imageUrl: string, smartCropParams: SmartCropParams): string {
		this.validateDimensions(smartCropParams);
		const queryParams = this.buildWithQueryParams({
			url: imageUrl,
			type: 'auto',
			...smartCropParams
		});

		return `${this.imaginaryUrl}/${OperationTypes.SMARTCROP}?${queryParams}`;
	}

	/**
	 * crop should be used to crop an image without resizing its content
	 *
	 * Imaginary automatically detects the point of interest around which the crop should be executed,
	 * hence why no coordinates are necessary
	 *
	 * @param imageUrl
	 * @param smartCropParams
	 */
	crop(imageUrl: string, cropParams: CropParams): string {
		this.validateDimensions(cropParams);
		const queryParams = this.buildWithQueryParams({
			url: imageUrl,
			type: 'auto',
			...cropParams
		});

		return `${this.imaginaryUrl}/${OperationTypes.CROP}?${queryParams}`;
	}

	/**
	 * resize should be used to alter the size of an image without altering its content
	 *
	 * 'nocrop' mode is forced when using this method, which means the image's ratio is kept.
	 * You should therefore only specify either a width or an height depending on the new dimensions you need
	 *
	 * @param imageUrl
	 * @param resizeParams
	 */
	resize(imageUrl: string, resizeParams: ResizeParams): string {
		this.validateDimensions(resizeParams);
		const queryParams = this.buildWithQueryParams({
			url: imageUrl,
			type: 'auto',
			...resizeParams,
			nocrop: true
		});

		return `${this.imaginaryUrl}/${OperationTypes.RESIZE}?${queryParams}`;
	}

	/**
	 * resize should be used to alter the size of an image without altering its content
	 *
	 * 'nocrop' mode is forced when using this method, which means the image's ratio is kept.
	 * You should therefore only specify either a width or an height depending on the new dimensions you need
	 *
	 * @param imageUrl
	 * @param resizeParams
	 */
	convert(imageUrl: string, commonParams: CommonParams): string {
		const queryParams = this.buildWithQueryParams({
			url: imageUrl,
			type: 'auto',
			...commonParams
		});

		return `${this.imaginaryUrl}/${OperationTypes.CONVERT}?${queryParams}`;
	}

	/**
	 * pipe should be used to pipe different operations allowed by the Imaginary API
	 * Keep in mind the pipe method is limited to 10 operations maximum.
	 *
	 * i.e.: 1st OP: Extract Operation -> 2nd OP: Resize Operation
	 * i.e.: 1st OP: Smartcrop Operation -> 2nd OP: Resize Operation
	 *
	 * @param imageUrl
	 * @param pipelineOperations
	 */
	pipe(imageUrl: string, pipelineOperations: PipelineOperation[]): string {
		if (pipelineOperations.length > 10) {
			throw new Error('pipe method is limited to 10 operations maximum');
		}

		const queryParams = this.buildWithQueryParams({
			url: imageUrl,
			type: 'auto',
			operations: JSON.stringify(pipelineOperations)
		});

		return `${this.imaginaryUrl}/pipeline?${queryParams}`;
	}

	private validateDimensions(dimensions: ImageDimensions): void {
		if (!dimensions.width && !dimensions.height) {
			throw new Error('dimensions should have at least a width or an height');
		}
	}

	private buildWithQueryParams(queryParams: Record<string, unknown>): string {
		return queryString.stringify(queryParams);
	}

	getSrcSet(
		imageUrl: string,
		resizeParams: GetSrcSetParams
	): { image1x: string; image2x: string; image3x: string; image4x: string } {
		const defaultParams = {
			type: 'auto',
			quality: resizeParams.quality
		};
		const image1x = this.resize(imageUrl, {
			...defaultParams,
			width: resizeParams.width,
			...(resizeParams.height ? { height: resizeParams.height } : {})
		});
		const image2x = this.resize(imageUrl, {
			...defaultParams,
			width: resizeParams.width * 2,
			...(resizeParams.height ? { height: resizeParams.height * 2 } : {})
		});
		const image3x = this.resize(imageUrl, {
			...defaultParams,
			width: resizeParams.width * 3,
			...(resizeParams.height ? { height: resizeParams.height * 3 } : {})
		});
		const image4x = this.resize(imageUrl, {
			...defaultParams,
			width: resizeParams.width * 4,
			...(resizeParams.height ? { height: resizeParams.height * 4 } : {})
		});

		return { image1x, image2x, image3x, image4x };
	}

	getSrcSetSmartCrop(
		imageUrl: string,
		smartCropParams: GetSrcSetSmartCropParams
	): { image1x: string; image2x: string; image3x: string; image4x: string } {
		const defaultParams = {
			type: 'auto',
			quality: smartCropParams.quality
		};
		const image1x = this.smartcrop(imageUrl, {
			...defaultParams,
			width: smartCropParams.width,
			...(smartCropParams.height ? { height: smartCropParams.height * 4 } : {})
		});
		const image2x = this.smartcrop(imageUrl, {
			...defaultParams,
			width: smartCropParams.width * 2,
			...(smartCropParams.height ? { height: smartCropParams.height * 2 } : {})
		});
		const image3x = this.smartcrop(imageUrl, {
			...defaultParams,
			width: smartCropParams.width * 3,
			...(smartCropParams.height ? { height: smartCropParams.height * 3 } : {})
		});
		const image4x = this.smartcrop(imageUrl, {
			...defaultParams,
			width: smartCropParams.width * 4,
			...(smartCropParams.height ? { height: smartCropParams.height * 4 } : {})
		});

		return { image1x, image2x, image3x, image4x };
	}
}

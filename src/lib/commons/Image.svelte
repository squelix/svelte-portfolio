<script lang="ts">
	import { FormatEnum, type ImageParams } from '$lib/services/image-sharp.service';
	import { imageService } from '$stores/services';

	export let src: string;
	export let alt = '';
	export let params: ImageParams;

	$: imagesWebp = $imageService.getSrcSet(src, { ...params, format: FormatEnum.Webp });
	$: imagesJpeg = $imageService.getSrcSet(src, { ...params, format: FormatEnum.Jpeg });
</script>

<picture>
	<source
		srcset={`${imagesWebp.image1x} 1x, ${imagesWebp.image2x} 2x, ${imagesWebp.image3x} 3x, ${imagesWebp.image4x} 4x`}
		type="image/webp"
	/>
	<source
		srcset={`${imagesJpeg.image1x} 1x, ${imagesJpeg.image2x} 2x, ${imagesJpeg.image3x} 3x, ${imagesJpeg.image4x} 4x`}
		type="image/jpeg"
	/>

	<img class={$$props.class} src={imagesJpeg.image1x} {alt} />
</picture>

<script lang="ts">
	import { imageService } from '$stores/services';

	import type { ImageParams } from '$lib/services/image-cloudinary.service';

	export let src: string;
	export let alt = '';
	export let params: ImageParams;

	$: images = $imageService.getSrcSet(src, params);
</script>

<img
	class={$$props.class}
	src={images.image1x}
	srcset={`${images.image1x} 1x, ${images.image2x} 2x, ${images.image3x} 3x, ${images.image4x} 4x`}
	{alt}
/>

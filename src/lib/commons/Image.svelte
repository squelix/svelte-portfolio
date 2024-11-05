<script lang="ts">
	/* eslint-disable @typescript-eslint/no-explicit-any */

	import { imageService } from '$stores/services';

	import type { ImageParams } from '$lib/services/image-cloudinary.service';

	type Props = {
		src: string;
		alt?: string;
		params: ImageParams;
		[key: string]: any;
	};

	let { src, alt = '', params, ...restProps }: Props = $props();

	let images = $derived($imageService.getSrcSet(src, params));
</script>

<img
	style={restProps.style}
	class={restProps.class}
	src={images.image1x}
	srcset={`${images.image1x} 1x, ${images.image2x} 2x, ${images.image3x} 3x, ${images.image4x} 4x`}
	{alt}
/>

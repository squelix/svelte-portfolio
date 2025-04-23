<script lang="ts">
	import { ImageContentfulService, type ImageParams } from '$lib/services/image-contentful.service';

	/* eslint-disable @typescript-eslint/no-explicit-any */

	type Props = {
		src: string;
		alt?: string;
		params: ImageParams;
		[key: string]: any;
	};

	let { src, alt = '', params, ...restProps }: Props = $props();

	let images = ImageContentfulService.getInstance().getSrcSet(src, params);
</script>

<img
	style={restProps.style}
	class={restProps.class}
	src={images.image1x}
	srcset={`${images.image1x} 1x, ${images.image2x} 2x, ${images.image3x} 3x, ${images.image4x} 4x`}
	{alt}
/>

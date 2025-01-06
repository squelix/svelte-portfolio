<script lang="ts">
	import Icon from '$lib/SvgIcon.svelte';

	import type { TechnoColor } from '$models/techno';

	type Props = {
		icon: string;
		color: TechnoColor | undefined;
	};

	let { icon, color }: Props = $props();
</script>

<span
	class="techno-icon"
	class:techno-icon--red={color === 'red'}
	class:techno-icon--blue={color === 'blue'}
	class:techno-icon--orange={color === 'orange'}
	class:techno-icon--pink={color === 'pink'}
	class:techno-icon--green={color === 'green'}
	class:techno-icon--dark-green={color === 'dark_green'}
>
	<Icon data={icon} />
</span>

<style lang="scss">
	.techno-icon {
		--red: var(--accent-3);
		--blue: var(--secondary-3);
		--orange: var(--accent-1);
		--pink: var(--accent-4);
		--green: var(--accent-2);
		--dark-green: var(--secondary-2);

		padding: 0.2362rem;
		color: var(--primary-3);
		background-color: #a0bde1;
		border-radius: 2px;
		position: absolute;
		top: 17px;
		right: 17px;

		&--red {
			background-color: var(--red);
		}

		&--blue {
			background-color: var(--blue);
		}

		&--orange {
			background-color: var(--orange);
		}

		&--pink {
			background-color: var(--pink);
		}

		&--green {
			background-color: var(--green);
		}

		&--dark-green {
			background-color: var(--dark-green);
		}
	}
</style>

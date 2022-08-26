<script lang="ts">
	import Icon from '$lib/SvgIcon.svelte';
	import { Enum_Techno_Color, type Maybe } from '$models/graphql-generated';

	export let icon: string;
	export let color: Maybe<Enum_Techno_Color> | undefined;
</script>

<span
	class="techno-icon"
	class:techno-icon--red={color === Enum_Techno_Color.Red}
	class:techno-icon--blue={color === Enum_Techno_Color.Blue}
	class:techno-icon--orange={color === Enum_Techno_Color.Orange}
	class:techno-icon--pink={color === Enum_Techno_Color.Pink}
	class:techno-icon--green={color === Enum_Techno_Color.Green}
	class:techno-icon--dark-green={color === Enum_Techno_Color.DarkGreen}
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

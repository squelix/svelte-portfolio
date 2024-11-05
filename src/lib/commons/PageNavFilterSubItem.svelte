<script lang="ts">
	import Checkbox from '$lib/commons/Checkbox.svelte';
	import Icon from '$lib/SvgIcon.svelte';
	import { technosIcons } from '$lib/technos-icons';
	import { t } from '$translations';

	import type { PageNavFilterItemInterface } from '$models/page-nav-filter-item.interface';

	type Props = {
		item: PageNavFilterItemInterface;
		checked: boolean;
		updateSelectedFilter: (filterId: string) => void;
	};

	let { item, checked = $bindable(), updateSelectedFilter }: Props = $props();
</script>

<li class="page-nav-filter-sub-item">
	<Checkbox bind:checked onchange={() => updateSelectedFilter(item.id)}>
		<span class="checkbox" class:checkbox--checked={checked}>
			<span class="checkbox__icon">
				<Icon data={technosIcons[item.id]} />
			</span>
			<span class="checkbox__text">
				{#if item.labelKey && !item.label}
					{$t(item.labelKey)}
				{/if}
				{#if item.label && !item.labelKey}
					{item.label}
				{/if}
			</span>
		</span>
	</Checkbox>
</li>

<style lang="scss">
	@use 'lib/mixins/font' as font;

	.checkbox {
		font-weight: normal;
		font-size: 1rem;
		line-height: 1.3125;

		&__text {
			transition: color var(--transition-duration) var(--transition-easing);
			color: var(--secondary-1);
		}

		&__icon {
			transition:
				color var(--transition-duration) var(--transition-easing),
				opacity var(--transition-duration) var(--transition-easing);
			color: var(--secondary-1);
			opacity: 0.4;
		}

		&--checked {
			.checkbox {
				&__text {
					color: var(--secondary-4);
				}

				&__icon {
					opacity: 1;
				}
			}
		}
	}
</style>

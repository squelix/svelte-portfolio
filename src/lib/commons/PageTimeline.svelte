<script lang="ts">
	import {
		Timeline,
		TimelineConnector,
		TimelineContent,
		TimelineItem,
		TimelineOppositeContent,
		TimelineSeparator
	} from 'svelte-vertical-timeline';

	// eslint-disable-next-line no-undef
	type T = $$Generic;

	export let list: T[];
	export let shouldDisplayLastConnector = true;
</script>

<section class="content">
	<Timeline style={'padding: 0; color: var(--secondary-1);'}>
		{#each list as item, i}
			<TimelineItem>
				<TimelineOppositeContent
					slot="opposite-content"
					style={'flex: 0; margin-left: 0; margin-right: 0;'}
				/>
				<TimelineSeparator style={'color: var(--secondary-1);'}>
					{#if $$slots['item-separator']}
						<slot name="item-separator" {item} />
					{:else}
						<b>◯</b>
					{/if}
					{#if $$slots['item-connector']}
						<slot name="item-connector" {item} />
					{:else if shouldDisplayLastConnector}
						<TimelineConnector style={'background-color: var(--secondary-1);'} />
					{:else if !shouldDisplayLastConnector && i !== list.length - 1}
						<TimelineConnector style={'background-color: var(--secondary-1);'} />
					{/if}
				</TimelineSeparator>
				<TimelineContent>
					<slot {item} last={i === list.length - 1} />
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</section>

<style lang="scss">
	@use 'lib/mixins/breakpoints' as br;

	.content {
		grid-column: 2/4;
		padding: 1.0625rem;

		@include br.desktop {
			overflow-y: auto;
			padding: 1.0625rem 2.375rem;
		}
	}
</style>

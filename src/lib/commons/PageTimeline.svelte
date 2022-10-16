<script lang="ts">
	import {
		Timeline,
		TimelineConnector,
		TimelineContent,
		TimelineItem,
		TimelineOppositeContent,
		TimelineSeparator
	} from 'svelte-vertical-timeline';

	type T = $$Generic;

	export let list: T[];
</script>

<section class="content">
	<Timeline style={'padding: 0; color: var(--secondary-1);'}>
		{#each list as item}
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
					{:else}
						<TimelineConnector style={'background-color: var(--secondary-1);'} />
					{/if}
				</TimelineSeparator>
				<TimelineContent>
					<slot {item} />
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

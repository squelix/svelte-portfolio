<script lang="ts">
	import { name, job } from '$stores/profile';
	import { t } from '$translations';
</script>

<h1 class="title">
	<span class="title__first">{$t('home.title.first')}</span>
	<span class="title__name">{$name}</span>
	<span class="title__job">>&nbsp;{$job}</span>
</h1>

<style lang="scss">
	.title {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		padding: 0 1.6875rem;

		&__first {
			font-weight: 450;
			font-size: 1.125rem;
			line-height: 1.3333;
			color: var(--grey);
			margin-bottom: 0.625rem;
		}

		&__name {
			font-weight: 400;
			font-size: 3.875rem;
			line-height: 1;
			color: var(--grey);
			text-shadow: 0 4px 4px rgb(0 0 0 / 25%);
			margin-bottom: 0.3125rem;
		}

		&__job {
			font-weight: 450;
			font-size: 1.25rem;
			line-height: 1.3;
			color: var(--accent-2);
		}
	}
</style>

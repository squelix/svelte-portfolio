<script lang="ts" context="module">
	import { itemSelected } from '$stores/page-sub-nav';

	itemSelected.set('personal-info-bio');
</script>

<slot />

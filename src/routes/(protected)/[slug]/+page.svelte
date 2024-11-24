<script lang="ts">
    import type { PageData } from './$types';
    import { formBuilder } from '$lib/formBuilder';
    import { onMount } from 'svelte'; 

    let { data }: { data: PageData } = $props();
    let form = $state();

    onMount(() => {
        form = formBuilder(data.transaction);
    });
</script>

<div class="main">
    <div>
        {data.transaction.formId}
    </div>
    {@html form}
</div>





<style>
    .main {
        width: 60dvw;
        height: 100%;
        box-sizing: border-box;
    }
    :global(input) {
        width: 100%;
        height: 35px;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }
    :global(.section) {
        margin-bottom: 20px;
    }
    :global(.assigned) {
        border: 1px solid red;
    }
    :global(.field) {
        margin-bottom: 10px;
    }
    :global(label) {
        display: block;
        margin-bottom: 5px;
    }
</style>
<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import { writable } from 'svelte/store';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
    let langTitle = $state();
    const language = writable('en');

    function changeLanguage() {
        $language = $language === "en" ? "fr" : "en";
    }

    langTitle = $language === "en" ? "Français" : "English";
</script>

<div class="main">
    <div class="header">
        <button><a href="/">Back</a></button>
        <h1>Hackaton</h1>
        <button onclick={changeLanguage}>{langTitle}</button>
    </div>
    <div class="slot">
        {@render children()}
    </div>
</div>



<style>
    .main {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 80px 1fr;
        height: 100dvh;
        width: 100dvw;
    }
    .header {
        background-color: #333;
        color: white;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }
    .slot {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
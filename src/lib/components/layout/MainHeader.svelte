<script>
    import {pageTitle} from "$lib/store";
    import ThemeController from "../ThemeController.svelte";
</script>

<header>
    <h1>{$pageTitle}</h1>

    <nav>
        <ThemeController />
    </nav>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        margin: 0;
    }
</style>
<script>
    // CSS
    import "$lib/css/css-reset.css";
    import "$lib/css/water-css.min.css";
    import "$lib/css/global.css";
    import "$lib/css/water-css-dark-theme.css";

    // Components
    import MainSidebar from "../lib/components/layout/MainSidebar.svelte";
    import MainHeader from "../lib/components/layout/MainHeader.svelte";
    import MainContent from "../lib/components/layout/MainContent.svelte";

    // Utilities
    import {onMount} from "svelte";

    onMount(() => {

    })
</script>


<div class="grid">
    <div class="sidebar">
        <MainSidebar />
    </div>

    <div class="header">
        <MainHeader />
    </div>

    <div class="content">
        <MainContent>
            <slot></slot>
        </MainContent>
    </div>
</div><!-- end grid -->


<style>
    .grid {
        display: grid;
        grid-template-columns: 330px calc(100% - 330px);
        grid-template-rows: auto 1fr;
        gap: 0 0;
        grid-template-areas:
    "Sidebar Header"
    "Sidebar Content";
    }

    .sidebar {
        grid-area: Sidebar;
        background-color: var(--background-alt);
        overflow: hidden;
        height: 100vh;
        padding: 50px 30px;
        position: sticky;
        top: 0;
    }

    .header {
        grid-area: Header;
        padding: 50px;
    }

    .content {
        grid-area: Content;
        padding: 0 50px 50px 50px;
    }
</style>
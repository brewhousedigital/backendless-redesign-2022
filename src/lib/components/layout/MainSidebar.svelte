<script>
    import { page} from '$app/stores';

    let navigationLinks = [
        {"name": "Dashboard", "href": "/"},
        {"name": "Manage", "href": "/manage"},
        {"name": "Users", "href": "/users"},
        {"name": "Data", "href": "/data"},
        {"name": "Files", "href": "/files"},
        {"name": "Messaging", "href": "/messaging"},
    ]
</script>

<div class="sidebar-logo-container">
    <a href="/" sveltekit:prefetch>
        <img src="/images/logo.svg" alt="Backendless Logo" id="sidebar-logo-svg" class="logo" />
    </a>
</div>

<nav>
    {#each navigationLinks as {name, href}}
        <a sveltekit:prefetch {href}
           class="{$page?.url?.pathname === href ? 'active' : ''}">
            {name}
        </a>
    {/each}
</nav>



<style>
    .sidebar-logo-container {

    }

    .logo {
        display: block;
        margin: 0 auto 50px auto;
    }

    nav a {
        font-size: 20px;
        font-weight: 500;
        display: block;
        margin-bottom: 16px;
        padding: 18px 26px;
        border-radius: 16px;
        color: var(--text-main);
        text-decoration: none;
        transition: all 300ms;
    }

    nav a.active {
        background-color: var(--primary);
        color: #fff;
    }

    nav a:hover, nav a:focus {
        background-color: var(--button-base);
    }

    nav a.active:hover, nav a.active:focus {
        background-color: var(--primary);
    }
</style>
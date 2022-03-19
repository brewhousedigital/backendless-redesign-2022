<script>
    import {theme} from "$lib/store";
    import {onMount} from "svelte";

    // Default icon
    let themeIcon = "moon-fill";

    // LocalStorage name
    let localStorageName = "site-theme";

    // Re-render any time the button is clicked
    $: {
        $theme
            // Dark Mode
            ? themeIcon = "brightness-high-fill"
            // Light Mode
            : themeIcon = "moon-fill";
    }

    // Accesses the DOM and updates the <html> tag to have a class
    const changeTheme = () => {
        const htmlTag = document.querySelector("html").classList;

        $theme
            ? htmlTag.add("dark-mode")
            : htmlTag.remove("dark-mode");

        // Update localStorage
        localStorage.setItem(localStorageName, JSON.stringify($theme));
    }

    // Change the theme on click
    const handleThemeChange = () => {
        theme.set(!$theme);
        changeTheme();
    }

    // Check if user has previously changed the theme
    onMount(() => {
        // Check for theme, and set default if missing
        if(localStorage.getItem(localStorageName) === null) {
            localStorage.setItem(localStorageName, "false");
        }

        let usersCurrentTheme = JSON.parse(localStorage.getItem(localStorageName));
        theme.set(usersCurrentTheme);
        changeTheme();
    })
</script>

<button aria-label="Change your theme" on:click={handleThemeChange}>
    <i class="bi bi-{themeIcon}"></i>
</button>
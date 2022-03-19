import { writable } from 'svelte/store';

/**
 * The user's theme can be used to customize the styling of the site
 * 0: light | 1: dark
 */
export const theme = writable(false);

/**
 * Page title - This is updated on most content pages
 */
export const pageTitle = writable("");

// Update the document title each time the pageTitle store is changed
pageTitle.subscribe(value => {
    if(typeof document !== "undefined") {document.title = `${value} - Backendless`;}
});
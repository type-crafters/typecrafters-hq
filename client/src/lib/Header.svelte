<script lang="ts">
    import { onMount } from "svelte";

    function loggedIn(): boolean { return false; }
    function displayNavbar() {
        const nav = document.getElementById("navigation-wrapper") as HTMLDivElement;
        nav.style.display = window.innerWidth <= 1024 ? "none" : "flex";
    }

    onMount(()=>{
        displayNavbar();
        window.addEventListener("resize", displayNavbar);
    });
</script>
<header id="website-header" class="bg-white dark:bg-black text-black dark:text-white flex justify-between items-center px-12 py-4 sticky top-0 min-h-20 border-b border-b-neutral-400 dark:border-b-white">
    <div>
        <a href="/" id="index-anchor" class="text-2xl flex items-end gap-6 font-semibold" title="Go home">
            <i class="bi bi-tools"></i>
            <h1 id="page-title">
                <span class="hidden md:inline">TypeCrafters</span>
                <span class="text-red-600">Studio</span>
            </h1>
        </a>
    </div>
    <div id="navigation" class="relative">
        <button id="navbar-dropdown" class="flex lg:hidden rounded border border-neutral-500 p-1 text-2xl">
            <i class="bi bi-list flex-center"></i>
        </button>
        <div id="navigation-wrapper" class="bg-white dark:bg-black rounded border lg:border-0 border-neutral-500 px-2 py-4 min-w-48 absolute z-10 top-12 right-0 lg:static flex flex-col-reverse lg:flex-row items-center gap-y-6 gap-x-12">
            <nav id="header-navbar" class="grid grid-flow-row lg:grid-flow-col gap-6">
                <a href="/games" class="hover:text-red-700 active:text-red-800 duration-150">Games</a>
                <a href="/blog" class="hover:text-red-700 active:text-red-800 duration-150">Blog</a>
                <a href="/team" class="hover:text-red-700 active:text-red-800 duration-150">Our team</a>
                <a href="/contact" class="hover:text-red-700 active:text-red-800 duration-150">Contact us</a>
            </nav>
            <div id="user-options" class="w-full lg:w-auto">
                {#if !loggedIn()}
                <div id="user-not-verified" class="flex flex-col lg:flex-row gap-y-4 gap-x-6 text-white">
                    <a href="/users/register" class="px-3 py-1 btn btn-red">Sign up</a>
                    <a href="/users/login" class="px-3 py-1 btn btn-neutral">Log in</a>
                </div>
                {:else}
                <div id="user-verified" class="flex justify-center">
                    <div id="user-pfp-container" class="w-12 aspect-square h-auto rounded-full flex items-center overflow-hidden">
                        <img src="https://via.placeholder.com/60" alt="User's profile" class="w-full h-full">
                    </div>
                </div>
                {/if}
            </div>
        </div>
    </div>
</header>
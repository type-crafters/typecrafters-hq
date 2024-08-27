<script lang="ts">
    import { onMount } from "svelte";

    function loggedIn(): boolean { return false; }

    onMount(()=>{
        window.addEventListener("resize", ()=>{
            const nav = document.getElementById("navigation-wrapper") as HTMLDivElement;
            //   v 
        });
    });
</script>
<header id="website-header" class="bg-white dark:bg-black text-black dark:text-white flex justify-between items-center px-12 py-4 sticky top-0 min-h-20 border-b border-b-neutral-400 dark:border-b-white">
    <div>
        <a href="/" id="index-anchor" class="text-2xl flex items-end gap-6 font-semibold">
            <i class="bi bi-tools"></i>
            <h1 id="page-title">
                <span>TypeCrafters</span>
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
                <a href="/about" class="hover:text-red-700 active:text-red-800 duration-150">About</a>
                <a href="/blog" class="hover:text-red-700 active:text-red-800 duration-150">Blog</a>
                <a href="/team" class="hover:text-red-700 active:text-red-800 duration-150">Our team</a>
                <a href="/contact" class="hover:text-red-700 active:text-red-800 duration-150">Contact us</a>
            </nav>
            <div id="user-options" class="w-full lg:w-auto">
                {#if !loggedIn()}
                <div id="user-not-verified" class="flex flex-col lg:flex-row gap-y-4 gap-x-6 text-white">
                    <a href="/users/signup" class="px-3 py-1 rounded font-semibold bg-red-600 hover:bg-red-700 active:bg-red-800 duration-150 flex justify-center items-center">Sign up</a>
                    <a href="/users/login" class="px-3 py-1 rounded font-semibold bg-neutral-400 dark:bg-neutral-600 hover:bg-neutral-500 dark:hover:bg-neutral-700 active:bg-neutral-600 dark:active:bg-neutral-800  duration-150 flex justify-center items-center">Log in</a>
                </div>
                {:else}
                <div id="user-verified" class="flex justify-center">
                    <div id="user-pfp-container" class="w-12 aspect-square h-auto rounded-full flex items-center overflow-hidden">
                        <img src="https://via.placeholder.com/60" alt="User's profile" class="w-full aspect-square h-auto">
                    </div>
                </div>
                {/if}
            </div>
        </div>
    </div>
</header>
<script lang="ts">
    function loggedIn(): boolean { return false; }
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
    <div class="flex items-center gap-12">
        <nav id="header-navbar" class="grid grid-flow-col gap-6">
            <a href="/games" class="hover:text-red-700 active:text-red-800 duration-150">Games</a>
            <a href="/about" class="hover:text-red-700 active:text-red-800 duration-150">About</a>
            <a href="/blog" class="hover:text-red-700 active:text-red-800 duration-150">Blog</a>
            <a href="/team" class="hover:text-red-700 active:text-red-800 duration-150">Our team</a>
            <a href="/contact" class="hover:text-red-700 active:text-red-800 duration-150">Contact us</a>
        </nav>
        <div id="user-options">
            {#if !loggedIn()}
            <div id="user-not-verified" class="grid grid-cols-2 gap-6 text-white">
                <a href="/users/signup" class="px-3 py-1 rounded font-semibold bg-red-600 hover:bg-red-700 active:bg-red-800 duration-150 flex justify-center items-center">Sign up</a>
                <a href="/users/login" class="px-3 py-1 rounded font-semibold bg-neutral-400 dark:bg-neutral-600 hover:bg-neutral-500 dark:hover:bg-neutral-700 active:bg-neutral-600 dark:active:bg-neutral-800  duration-150 flex justify-center items-center">Log in</a>
            </div>
            {:else}
            <div id="user-verified">
                <div id="user-pfp-container" class="w-12 aspect-square h-auto rounded-full flex items-center overflow-hidden">
                    <img src="https://via.placeholder.com/60" alt="User's profile" class="w-full aspect-square h-auto">
                </div>
            </div>
            {/if}
        </div>
    </div>
</header>
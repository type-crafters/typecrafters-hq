<footer id="website-footer" class="flex flex-col gap-6 bg-neutral-200 dark:bg-neutral-900 mt-auto py-4 px-12">
    <div class="footer-row justify-evenly">
        <a href="/tos" class="text-center">Terms of Service</a>
        <a href="/privacy" class="text-center">Privacy Policy</a>
    </div>
    <div id="social-handles" class="footer-row justify-center flex gap-8 sm:gap-12 md:gap-24 text-xl">
        <a href="/">
            <i class="bi bi-twitter-x"></i>
        </a>
        <a href="/">
            <i class="bi bi-facebook"></i>
        </a>
        <a href="/">
            <i class="bi bi-instagram"></i>
        </a>
    </div>
    <div id="all-rights-reserved" class="footer-row justify-center">
        <p class="text-center">
            &copy;
            <span id="year">{ (new Date()).getFullYear() }</span>
            <span>TypeCrafters Studio.</span>
            <span>All rights reserved.</span>
        </p>
    </div>
</footer>
<style lang="postcss">
    .footer-row {
        @apply flex;
    }
</style>
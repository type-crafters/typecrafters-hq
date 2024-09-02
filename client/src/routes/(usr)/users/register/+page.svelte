<script lang="ts">
    import FloatingIndex from "$lib/FloatingIndex.svelte";
</script>

<main id="register-page" class="mx-4 min-h-screen flex items-center">
    <section class="container mx-auto my-8 flex flex-col items-center">
        <h1 class="page-title text-center">New to TypeCrafters Studio?</h1>
        <p class="text-lg mb-4 max-w-lg text-center">
            Create an account to join our community, get updates on our latest games, and join beta tests.
        </p>
        <form method="post" id="resgister-form" class="flex flex-col items-center gap-8 my-8">
            <div class="input-container">
                <label for="user">Username</label>
                <input class="textbox" type="text" name="user" id="user" />
            </div>
            <div class="input-container">
                <label for="email">Email</label>
                <input class="textbox" type="email" name="email" id="email" />
            </div>
            <div class="input-container">
                <label for="pass">Password</label>
                <input class="textbox" type="password" name="pass" id="pass" />
            </div>
            <div class="input-container">
                <label for="repeat-pass">Confirm password</label>
                <input class="textbox" type="password" name="repeat-pass" id="repeat-pass" />
            </div>
            <div class="input-container">
                <input class="submit btn btn-red" type="submit" value="Sign up" />
            </div>
            <div class="input-container">
                <p class="text-center">
                    Already a member? Click
                    <a class="blue-link" href="/users/login">here</a>
                    to log into our account.
                </p>
            </div>
        </form>
    </section>
    <FloatingIndex />
</main>

<script lang="ts">
    import FloatingIndex from "$lib/FloatingIndex.svelte";
    import ToolTip from "$lib/ToolTip.svelte";

    const userNameToolTip = "Usernames must be between 8 and 31 characters in length and:<br>" + 
                            "<ul class=\"my-2 ml-2\">" + 
                            "<li>&middot;&nbsp;&nbsp;Must start with a letter (A-Z, a-z) or an underscore (_).</li>" + 
                            "<li>&middot;&nbsp;&nbsp;Can contain letters, numbers (0-9) and underscores.</li>" + 
                            "</ul>"; 
    
    function isUsernameValid(username: string)
    {
        const errors = {
            1: "Username is empty!",
            2: "Username is not valid. Check the tooltip for valid username rules."
        }
        return /^[A-Za-z_][A-Za-z0-9_]{7,30}$/.test(username);
    }
</script>

<main id="register-page" class="mx-4 min-h-screen flex items-center">
    <section class="container mx-auto my-8 flex flex-col items-center">
        <h1 class="page-title text-center">New to TypeCrafters Studio?</h1>
        <p class="text-lg mb-4 max-w-lg text-center">
            Create an account to join our community, get updates on our latest games, and join beta tests.
        </p>
        <form method="post" id="resgister-form" class="flex flex-col items-center gap-8 my-8">
            <div class="input-container">
                <div class="label-wrapper"> 
                    <label for="user">Username</label>
                    <ToolTip id="user" info={userNameToolTip}/>
                </div>
                <input class="textbox" type="text" name="user" id="user">
            </div>
            <div class="input-container">
                <div class="label-wrapper">
                    <label for="email">Email</label>
                    <ToolTip id="email"/>
                </div>
                <input class="textbox" type="email" name="email" id="email">
            </div>
            <div class="input-container">
                <div class="label-wrapper">
                    <label for="pass">Password</label>
                    <ToolTip id="pass"/>
                </div>
                <input class="textbox" type="password" name="pass" id="pass">
            </div>
            <div class="input-container">
                <div class="label-wrapper">
                    <label for="repeat-pass">Confirm password</label>
                </div>
                <input class="textbox" type="password" name="repeat-pass" id="repeat-pass">
            </div>
            <div class="input-container">
                <input class="submit btn btn-red" type="submit" value="Sign up">
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
    <FloatingIndex/>
</main>

<style lang="postcss">
    .label-wrapper {
        @apply flex gap-4 items-center;
    }
</style>
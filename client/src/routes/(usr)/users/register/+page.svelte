<script lang="ts">
    import FloatingIndex from "$lib/FloatingIndex.svelte";
    import ToolTip from "$lib/ToolTip.svelte";

    const usernameToolTip = "Usernames must be between 8 and 31 characters long and:<br>" + 
                        "<ul class=\"my-2 ml-2\">" + 
                        "<li>Start with a letter (A-Z, a-z) or an underscore (_).</li>" + 
                        "<li>Contain only letters, numbers (0-9), and underscores.</li>" + 
                        "</ul>";

    const passwordToolTip = "Passwords must be at least 8 characters long and:<br>" + 
                        "<ul class=\"my-2 ml-2\">" + 
                        "<li>Include at least one uppercase and one lowercase letter.</li>" + 
                        "<li>Include at least one number.</li>" + 
                        "</ul>";
    function displayAlert(id: string, message: string) {
        const alert = document.getElementById(id) as HTMLDivElement;

        alert.innerText = message;
        alert.style.display = "flex";
    }

    function fadeAlert(id: string) {
        const alert = document.getElementById(id) as HTMLDivElement;

        alert.innerText = "";
        alert.style.display = "none"; 
    }

    function validateForm() {
        const email = document.getElementById("email") as HTMLInputElement;
        const pass = document.getElementById("pass") as HTMLInputElement;
        const repeatPass = document.getElementById("repeat-pass") as HTMLInputElement;
    }

    function validateUsername() {
        const user = document.getElementById("user") as HTMLInputElement;
        if(user.value == "") {
            displayAlert("user-alert", "Username cannot be empty!");
        } else if(!/^[A-Za-z_][A-Za-z0-9_]{7,30}$/.test(user.value)) {
            displayAlert("user-alert", "Username does not match our requirements!");
        } else {
            fadeAlert("user-alert");
        }  
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
                    <ToolTip id="user" info={usernameToolTip}/>
                </div>
                <input class="textbox" type="text" name="user" id="user" on:input={validateUsername}>
                <div id="user-alert" class="hidden gap-4 items-center text-red-500">
                    <i class="bi bi-exclamation"></i>
                </div>
            </div>
            <div class="input-container">
                <div class="label-wrapper">
                    <label for="email">Email</label>
                </div>
                <input class="textbox" type="email" name="email" id="email">
            </div>
            <div class="input-container">
                <div class="label-wrapper">
                    <label for="pass">Password</label>
                    <ToolTip id="pass" info={passwordToolTip}/>
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
<script lang="ts">
    function closeImage() {
        const section = document.getElementById("full-screen-picture") as HTMLElement;
        section.style.display = "none";
    }

    function openImage() {
        const section = document.getElementById("full-screen-picture") as HTMLElement;
        section.style.display = "flex";
    }
</script>
<main id="edit-profile-page" class="m-4">
    <section id="full-screen-picture" class="fixed z-50 top-0 left-0 w-full h-full flex-center">
        <button id="close-button" class="fixed top-4 right-4 flex-center text-4xl duration-150 hover:text-5xl" on:click={closeImage}>
            <i class="flex-center bi bi-x"></i>
        </button>
        <img src="https://via.placeholder.com/400" alt="'s profile" class="w-96 aspect-square h-auto bg-neutral-800 border-none outline-none ring-0"> 
    </section>
    <section id="edit-profile" class="container mx-auto">       
        <h1 class="page-title">Edit Profile</h1>
        <form method="post" class="w-full max-w-3xl mx-auto">
            <div id="picture-container" class="flex gap-8 items-center">
                <div id="picture-wrapper" class="w-36 aspect-square h-auto bg-center bg-no-repeat bg-cover bg-blue-500 rounded-full relative flex-center overflow-hidden">
                    <button type="button" id="show-picture" class="absolute w-full h-full flex-center" on:click={openImage}>
                        <div id="text-container" class="text-xl font-semibold">
                            <span class="flex gap-2">
                                <i class="bi bi-camera"></i>
                                <span>Show</span>
                            </span>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col gap-6">
                    <label for="picture" class="text-xl font-semibold">Profile picture</label>
                    <label for="picture">
                        <div id="picture-style" class="btn btn-red px-3 py-1">Change picture</div>
                        <input type="file" name="picture" id="picture" class="hidden">
                    </label>
                </div>
            </div>
        </form>
    </section>
</main>
<style lang="postcss">
    #show-picture {
        background-color: rgba(0, 0, 0, 0.0);
        color: rgba(255, 255, 255, 0.0);
        transition: all 150ms ease-in-out;
    }

    #show-picture:hover {
        background-color: rgba(0, 0, 0, 0.33);
        color: rgba(255, 255, 255, 1.0);
    }

    #show-picture:active {
        background-color: rgba(0, 0, 0, 0.67);
    }

    #full-screen-picture {
        background-color: rgba(0, 0, 0, 0.33);
        backdrop-filter: blur(3px);
        display: none;
    }
</style>

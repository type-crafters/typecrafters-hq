<script lang="ts">
    function copy(id: string): void {
        const span = document.getElementById(id) as HTMLSpanElement;
        const value = span.innerText; /* span.getAttribute("data-value")  */
    }
</script>

<main id="contact-us-page" class="flex flex-col lg:flex-row my-8 md:mx-12 gap-20">
    <section id="email-form" class="md:flex-3">
        <div class="w-4/5 md:w-2/3 2xl:w-1/2 mx-auto">
            <h2 class="text-center text-3xl font-semibold mb-6">Send us an Email</h2>
            <p class="text-center mb-6 mx-2">
                We're always excited to hear from you. Whether you have a question
                about one of our games, or feedback you'd like to share with us, 
                don't hesitate to get in touch. Your thoughts and insights help us 
                create better games and experiences.
            </p>
            <form method="post" class="grid gap-8">
                <div class="input-wrapper">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" class="textbox" />
                </div>
                <div class="input-wrapper">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" class="textbox" />
                </div>
                <div class="input-wrapper">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" class="textbox resize-y" rows="5"></textarea>
                </div>
                <div class="input-wrapper">
                    <input type="submit" value="Send email" class="submit btn-red" />
                </div>
            </form>
        </div>
    </section>
    <aside id="contact-information" class="mx-4 md:flex-1">
        <h3 class="text-xl font-semibold mb-8">Contact info</h3>
        <div id="contact-information" class="grid gap-8">
            <div class="info-row">
                <button class="info-container">
                    <div class="icon-circle text-secondary">
                        <i class="bi bi-envelope"></i>
                    </div>
                    <div class="info-wrapper flex-1">
                        <h4>Email</h4>
                        <span class="text-secondary">typecrafters0@gmail.com</span>
                    </div>
                </button>
            </div>
            <div class="info-row">
                <div class="info-container">
                    <div class="icon-circle text-secondary">
                        <i class="bi bi-telephone-fill"></i>
                    </div>
                    <div class="info-wrapper">
                        <h4>Phone</h4>
                        <span class="text-secondary">(507) 222-1234</span>
                    </div>
                </div>
            </div>
            <div class="info-row">
                <div class="info-container">
                    <div class="icon-circle text-secondary">
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div class="info-wrapper">
                        <h4>Address</h4>
                        <span class="text-secondary">123 Street Road, City, State 12345</span>
                    </div>
                </div>
            </div>
            <div class="info-row">
                <div class="info-container">
                    <div id="map-wrapper" class="rounded overflow-hidden w-full md:w-3/5 lg:w-full aspect-[4/3] h-auto my-2">
                        <iframe
                            class="w-full h-full"
                            title="Map to our HQ"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.2219670433838!2d-79.53304449340597!3d9.023204796768331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9d8f2e76d39%3A0xaaaa4bc649942528!2sUniversidad%20Tecnol%C3%B3gica%20de%20Panam%C3%A1%20-%20Edificio%203.!5e0!3m2!1sen!2spa!4v1724778236433!5m2!1sen!2spa"
                            allowfullscreen
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</main>

<style lang="postcss">
    .input-wrapper {
        @apply text-lg flex flex-col gap-4;
    }

    .input-wrapper label {
        @apply font-semibold;
    }

    .textbox {
        @apply bg-neutral-100 dark:bg-neutral-800 text-lg px-2 py-1 rounded border border-neutral-400 dark:border-neutral-600;
    }
    .icon-circle {
        @apply w-12 aspect-square h-auto rounded-full border-2 border-neutral-500 dark:border-neutral-400 text-2xl flex items-center justify-center;
    }

    .info-container {
        @apply flex items-center gap-6;
    }

    .info-container .info-wrapper h4 {
        @apply text-lg text-left font-semibold;
    }

    .submit {
        @apply text-lg py-2;
    }
</style>

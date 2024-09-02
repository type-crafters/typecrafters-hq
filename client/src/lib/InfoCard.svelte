<script lang="ts">
    import type { InfoCard } from "./types";
    export let info: InfoCard = {
        type: "Unkown",
        icon: "bi-question-mark",
        value: "No info added",
    };

    function nameToId(name: string): string {
        return name.trim().toLocaleLowerCase().replace(" ", "-");
    }

    function resumeText(text: string, length: number = 50): string {
        if (text.length <= length) {
            return text;
        }

        let short = "";

        if(text.indexOf(" ") >= 0) {
            const words = text.split(" ");
            
            for (const word of words) {
                if (short.length + word.length + 1 <= length) {
                    short += word + " ";
                } else {
                    short = short.trim() + "...";
                    break;
                }
            }
        } else {
            short = text.substring(0, length) + "...";
        }

        return short.trim();
    }

    function copyValue(event: MouseEvent) {
        const target = event.currentTarget as HTMLButtonElement;
        const value = target.getAttribute("data-value") as string;
        const notif = document.getElementById(nameToId(info.type) + "-alert") as HTMLDivElement;

        navigator.clipboard.writeText(value);

        void notif.offsetWidth;

        notif.style.display = "flex";
        setTimeout(() => {
            notif.style.opacity = "0";
        }, 2000);

        setTimeout(() => {
            notif.style.display = "none";
            notif.style.opacity = "1";
        }, 2300);
    }
</script>

<button id={nameToId(info.type) + "-btn"} class="info-btn" data-value={info.value} on:click={copyValue} title={"Copy '" + resumeText(info.value) + "'"}>
    <div id={nameToId(info.type) + "-alert"} class="notification">
        <i class="bi bi-clipboard"></i>
        <span>Copied!</span>
    </div>
    <div class="info-circle">
        <i class={"info-icon bi " + info.icon}></i>
    </div>
    <div class="info-wrapper flex-1 flex flex-col align-start">
        <h4 class="type">{info.type}</h4>
        <span class="value">{info.value}</span>
    </div>
</button>

<style lang="postcss">
    .info-btn {
        @apply w-full relative flex items-center gap-6 duration-150 text-neutral-500 dark:text-neutral-400;
    }

    .notification {
        @apply  text-white absolute hidden z-10 top-0 right-0 gap-2 bg-emerald-600 px-4 py-1 rounded;
        opacity: 1;
        transition: opacity 300ms ease-out;
    }

    .info-circle {
        @apply w-12 aspect-square h-auto rounded-full border-2 text-2xl flex justify-center items-center border-neutral-500 dark:border-neutral-400;
    }

    .info-icon {
        @apply flex justify-center items-center;
    }

    .type {
        @apply text-black dark:text-white text-lg text-left font-semibold;
    }

    .value {
        @apply text-left text-neutral-500 hover:text-neutral-400;
    }

    .info-btn, .info-circle, .info-icon, .type, .value {
        @apply duration-150;
    }

    .info-btn:hover .info-circle {
        @apply border-red-600;
    }

    .info-btn:hover .info-icon, .info-btn:hover .type  , .info-btn:hover .value {
        @apply text-red-600;
    }

    .info-btn:active .info-circle {
        @apply border-red-800;
    }

    .info-btn:active .info-icon, .info-btn:active .type, .info-btn:active .value {
        @apply text-red-800;
    }
</style>

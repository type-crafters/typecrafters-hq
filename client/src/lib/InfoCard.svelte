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

<button
    class="relative w-full flex items-center gap-6"
    data-value={info.value}
    on:click={copyValue}
    title={"Copy '" + resumeText(info.value) + "'"}
>
    <div
        id={nameToId(info.type) + "-alert"}
        class="notification text-white absolute hidden z-10 top-0 right-0 gap-2 bg-emerald-600 px-4 py-1 rounded"
    >
        <i class="bi bi-clipboard"></i>
        <span>Copied!</span>
    </div>
    <div
        class="w-12 aspect-square h-auto rounded-full border-2 border-neutral-500 dark:border-neutral-400 text-2xl flex items-center justify-center text-secondary"
    >
        <i class={"bi " + info.icon}></i>
    </div>
    <div class="info-wrapper flex-1 flex flex-col align-start">
        <h4 class="text-lg text-left font-semibold">{info.type}</h4>
        <span class="text-left text-secondary">{info.value}</span>
    </div>
</button>

<style>
    .notification {
        opacity: 1;
        transition: opacity 300ms ease-out;
    }
</style>

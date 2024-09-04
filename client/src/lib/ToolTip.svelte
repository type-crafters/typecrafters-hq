<script lang="ts">
    export let id: string;
    export let info: string = "Lorem ipsum dolor sit amet consectetur," 
                            + " adipisicing elit. Necessitatibus animi"
                            + " explicabo vitae velit accusantium dolor" 
                            + " officiis adipisci autem amet voluptas.";


    function showTooltip(event: Event) {
        const target = event.currentTarget as HTMLInputElement;
        const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll("[name='tooltips']");

        for(let checkbox of checkboxes){
            if (checkbox != target) {
                checkbox.checked = false;
            }
        }
    }
</script>

<div class="tooltip" id={id + "-tooltip"}>
    <div class="tooltip-label" id={id + "-label"}>
        <i class="tooltip-icon bi bi-info-circle" id={id + "-icon"}></i>
        <!-- <input type="checkbox" name="tooltips" id={id + "-toggle"} class="tooltip-toggle" on:change={showTooltip}> -->
    </div>
    <div id={id + "-bubble"} class="tooltip-bubble">
        <p class="tooltip-text">{ @html info }</p>
    </div>
</div>

<style lang="postcss">
    .tooltip {
        @apply  w-full relative flex gap-4;
    }

    .tooltip-label {
        @apply text-sm text-white hover:text-blue-500 duration-150;
    }

    .tooltip-toggle {
        @apply hidden;
    }

    .tooltip-bubble {
        @apply absolute left-8 px-2 py-1 z-10 bg-neutral-200 dark:bg-neutral-800 rounded border border-neutral-400 dark:border-neutral-500;
        display: none;
    }

    .tooltip-label:has(.tooltip-toggle:checked) {
        @apply text-blue-500;
    }

    .tooltip-label:hover ~ .tooltip-bubble {
        display: block;
    }
</style>
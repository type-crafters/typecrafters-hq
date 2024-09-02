<script lang="ts">
    import type { TeamMember } from "./types";
    function nameToId(name: string): string {
        return name.trim().toLocaleLowerCase().replace(" ", "-");
    }

    export const member: TeamMember = {
        name: "Diego Chan",
        role: "Chief of Technology",
        picture: "/media/img/member/risa_incontenible.jfif",
        email: "diego.chan@utp.ac.pa"
    }

    function copyEmail(event: MouseEvent) {
        const target = event.currentTarget as HTMLButtonElement;
        const email = target.getAttribute("data-value") as string;
        const notif = document.getElementById(nameToId(member.name) + "-alert") as HTMLDivElement;
        
        navigator.clipboard.writeText(email);

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

<button class="relative flex py-1 my-8 gap-8 w-fit items-center" title={"Copy " + member.name + "'s email address" } data-value={member.email} on:click="{copyEmail}">
    <div id={nameToId(member.name) + "-alert"} class="notification text-white absolute hidden z-10 top-1 right-1 gap-2 bg-emerald-600 px-4 py-1 rounded">
        <i class="bi bi-clipboard"></i>
        <span>Copied!</span>
    </div>
    <div class="w-28 aspect-square h-auto rounded-full flex-center overflow-hidden">
        <img src={ member.picture } alt={ member.name + "'s profile" }>
    </div>
    <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-semibold">{ member.name }</h2>
        <h4 class="text-secondary">{ member.role }</h4>
    </div>
</button>

<style lang="postcss">
    .notification {
        opacity: 1;
        transition: opacity 300ms ease-out;
    }
</style>

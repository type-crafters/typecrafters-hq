<div class="member-card nicely-shaded">
    <div class="profile-circle">
        <img class="profile-picture" src="media/img/member/risa_incontenible.jfif" alt="Diego Chan">
    </div>
    <h2 class="member-name">Diego Chan</h2>
    <h4 class="member-role text-secondary">Chief of Technology</h4>
</div>
<style lang="postcss">
    .member-card {
        @apply bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 w-48 flex flex-col items-center gap-4;
    }
    .member-card .profile-circle {
        @apply w-32 aspect-square h-fit rounded-full bg-neutral-100 flex justify-center items-center overflow-hidden;
    }

    .member-card .profile-circle .profile-picture {
        @apply w-full h-full;
    }

    .member-card .member-name {
        @apply text-xl font-semibold text-center;
    }

</style>
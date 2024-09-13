<script lang="ts">
    import MemberCard from "$lib/MemberCard.svelte";
</script>

<main id="our-team-page" class="mx-4">
    <section class="container mx-auto my-12">
            <div id="banner-container" class="w-full aspect-[3/1] h-auto rounded-xl overflow-hidden flex-center bg-neutral-800">
                <img src="media/img/mural.jpg" alt="Mural Media File" class="min-w-full min-h-full" />
            </div>
            <div id="company-information" class="my-8">
                <div id="statement-container" class="text-container">
                    <h1 class="page-title">We are TypeCrafters</h1>
                    <p class="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, corrupti nesciunt, minus sed incidunt
                        atque odio eos aperiam quis laudantium cumque amet ab quia ex doloremque possimus sapiente qui impedit.
                        Quidem accusantium, temporibus error dolor harum porro vero repellat sint unde. Tempora est nostrum
                        nulla consequuntur modi officia inventore, iusto autem quis, sed culpa cupiditate eum itaque! Incidunt,
                        dolor minus! Nisi saepe ad laudantium ipsam aliquid, veritatis labore quia nam reiciendis modi,
                        recusandae ullam. Optio, reiciendis error fuga tempore excepturi tenetur molestias quae dolor! In
                        cupiditate a vel ipsa inventore. Dolorum molestiae esse suscipit repellat cum labore voluptatibus
                        ducimus vero asperiores commodi ipsam, ut aut rerum exercitationem dolores! Optio vel illum repellendus
                        eum at deserunt blanditiis ex a. Reiciendis, iste! Necessitatibus labore amet qui, saepe dignissimos
                        reprehenderit ducimus doloremque explicabo, consequuntur est reiciendis, aut quaerat ex tenetur optio
                        itaque assumenda iste. Qui alias exercitationem aliquam voluptas fugiat, nulla inventore cum.
                    </p>
                </div>
                <div id="vision-container" class="text-container">
                    <h2 class="page-subtitle">Our vision</h2>
                    <p class="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi aperiam temporibus nam a,
                        consequatur suscipit reprehenderit culpa magnam quisquam. Architecto non, accusamus est optio aliquid
                        corrupti ex quis a! Aliquam neque itaque laboriosam sit, placeat obcaecati suscipit cupiditate dolorem
                        eaque, cum similique! Architecto, eos molestias, vel quisquam modi fugit eveniet voluptatibus quod
                        numquam tenetur porro accusantium ad cum consequatur?
                    </p>
                </div>
                <div id="mission-container" class="text-container">
                    <h2 class="page-subtitle">Our mission</h2>
                    <p class="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi aperiam temporibus nam a,
                        consequatur suscipit reprehenderit culpa magnam quisquam. Architecto non, accusamus est optio aliquid
                        corrupti ex quis a! Aliquam neque itaque laboriosam sit, placeat obcaecati suscipit cupiditate dolorem
                        eaque, cum similique! Architecto, eos molestias, vel quisquam modi fugit eveniet voluptatibus quod
                        numquam tenetur porro accusantium ad cum consequatur?
                    </p>
                </div>
            </div>
            <div id="team-members">
                <h2 class="page-subtitle">Meet the team</h2>
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </div>
    </section>
</main>

<style lang="postcss">
    .text-container {
        @apply my-6;
    }

    .text-container p {
        @apply text-lg;
    }
</style>

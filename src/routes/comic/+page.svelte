<script lang="ts">
    import Comic from "$lib/components/Comic.svelte";
    import {getComicId, getComicData} from "$lib/api/comic";
    import {onMount} from "svelte";

    let title = $state("Loading...");
    let date = $state(new Date());
    let img = $state('https://i.pinimg.com/originals/b4/4e/22/b44e229598a8bdb7f2f432f246fb0813.gif');
    let img_alt = $state("Loading...");
    let is_loading = $state(true);

    const loadComic = async () => {
        console.log("onMount");
        const comic_id = await getComicId("n.timofeev@innopolis.university");
        const comic_data = await getComicData(comic_id);
        title = comic_data.safe_title;
        date = new Date(parseInt(comic_data.year), parseInt(comic_data.month) - 1, parseInt(comic_data.day));
        img = comic_data.img;
        img_alt = comic_data.alt;
    }
    loadComic().then(() => {
        is_loading = false;
    });
</script>

<div
        class="loader"
        class:shown={is_loading}
        class:hidden={!is_loading}
></div>
{#if !is_loading}
    <Comic {title} {date} {img} {img_alt}/>
{/if}

<style lang="css">
    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 0 0 rgba(172, 172, 172, 0.5);
        animation: l2 1.5s infinite linear;
        justify-content: center;
        margin: auto;
    }

    .loader:before,
    .loader:after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        box-shadow: 0 0 0 0 rgba(172, 172, 172, 0.5);
        animation: inherit;
        animation-delay: -0.5s;
    }

    .loader:after {
        animation-delay: -1s;
    }

    .shown {
        opacity: 1;
        transform: translateY(0);
    }

    .hidden {
        opacity: 0;
        transform: translateY(20px);
    }
</style>
<script lang="ts">
    import {formatDistanceToNow} from 'date-fns';
    import type {Comic} from "$lib/types";

    const {
        title,
        date,
        img,
        img_alt
    }: Comic = $props();
    
</script>

<div class="card">
    <div class="card-inner">
        <h1 class="comic-title">{title}</h1>
        <p class="comic-date">{date.toLocaleString()}</p>
        <p class="comic-from-now">{formatDistanceToNow(date, {addSuffix: true})}</p>
        <img src="{img}" alt="{img_alt}" class="comic-img">
        <button class="back-button" onclick={() => window.location.href = '/'}>
            Back to main
        </button>
    </div>
</div>


<style lang="css">
    .back-button {
        background: #33333c;
        color: #fff;
        border: 2px solid #212127;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.3s, color 0.3s;
        margin-top: 30px;
    }

    .comic-title, .comic-date, .comic-from-now, .comic-img {
        transform: translateY(20px);
        transition: opacity 1s ease, transform 1s ease;
    }

    .comic-img {
        width: 100%;
        height: auto;
        margin-top: 20px;
        border-radius: 10px;
    }

    .comic-title {
        font-size: 24px;
        color: #fff;
    }

    .comic-date {
        font-size: 16px;
        font-weight: 300;
        font-style: normal;
        margin-bottom: 10px;
        color: rgba(255, 255, 255, 0.5);
    }

    .comic-from-now {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
    }

    @keyframes l2 {
        100% {
            box-shadow: 0 0 0 100px #0000;
        }
    }

    .card {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 500px;
        height: 500px;
        padding: 30px 70px;
        text-align: center;
        border-radius: 30px;
        background: #3c3c46;
        box-shadow: inset 40px 40px 80px #33333c, inset -40px -40px 80px #454551;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .card-inner {
        width: 100%;
        height: fit-content;
    }
</style>
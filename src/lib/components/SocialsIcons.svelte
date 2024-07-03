<script lang="ts">
    import type {Links} from "$lib/types";

    const {github, telegram, email}: Links = $props();
</script>

<div class="social-icons">
    {#if github}
        <a
                href={github} target="_blank"
                id="gh-link"
        >
            <img src="https://img.icons8.com/ios/128/github--v1.png" alt="GitHub">
        </a>
    {/if}
    {#if telegram}
        <a
                href={telegram} target="_blank"
                id="tg-link"
        >
            <img src="https://img.icons8.com/ios/128/telegram.png" alt="Telegram">
        </a>
    {/if}
    {#if email}
        <a
                href={"mailto:" + email} target="_blank"
                id="email"
        >
            <img src="https://img.icons8.com/ios/128/apple-mail.png" alt="Email">
        </a>
    {/if}
</div>

<style>
    .social-icons {
        margin-top: 20px
    }

    .social-icons a {
        display: inline-block;
        margin: 0 20px;
        padding: 10px;
        width: 52px;
        height: 52px;
        transition: all .2s ease;
        border-radius: 50%
    }

    .social-icons a img {
        width: 32px;
        height: 32px;
        filter: invert()
    }

    .social-icons a:hover {
        background-color: var(--action-hover)
    }
</style>
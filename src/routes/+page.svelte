<script lang="ts">
    import ProfileCard from "$lib/components/ProfileCard.svelte";
</script>

<ProfileCard
        name="Nikita Timofeev"
        nickname="morisummer"
        description="A passionate full-stack developer with a strong background in Python"
        links={{
        github: "https://github.com/MoriSummerz",
        telegram: "https://t.me/MoriSummerz",
        email: "timofeevnikita111@gmail.com"
    }}
        avatar="https://i.redd.it/lg8mw8uk6xz81.jpg"
        projects={[
        "Full-stack engineer @ Spredo",
        "Python backend developer @ Innopolis SEZ",
        "PERN developer @ MEGIS Kazan"
    ]}
/>
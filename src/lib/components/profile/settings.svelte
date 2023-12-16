<script lang="ts">
    import { currentUser, type DiscordUser, type FrontierUser, type UserOrNull } from "$lib/user";
    import { derived, type Readable } from "svelte/store";
    let discord = derived(currentUser, ($currentUser => {
        const princ = $currentUser?.providers.find(x => x.class == "discord")
        console.log(princ)
        console.log(princ?.info)
        return princ?.info as (DiscordUser | undefined)
    }))
    let frontier = derived(currentUser, (user => {
        const princ = user?.providers.find(x => x.class == "frontier")
        return princ?.info as (FrontierUser | undefined)
    }))
    const discordLogin = () => {
        window.open("/api/v1/auth/discord/login")
    }
    const frontierLogin = () => {
        window.open("/api/v1/auth/frontier/login")
    }
</script>

<h4 class="ui top attached dividing header">
    Discord
    {#if $discord === undefined}
        <button class="ui right top attached tiny blue button" on:click={discordLogin}>Авторизоваться</button>
    {/if}
</h4>

{#if $discord?.globalName !== undefined}
<h5 class="ui header">
    Авторизованы как: {$discord?.globalName}
</h5>
{/if}

<h4 class="ui top attached dividing header">
    frontier
    {#if $frontier === undefined}
        <button class="ui right top attached tiny blue button" on:click={frontierLogin}>Авторизоваться</button>
    {/if}
</h4>

{#if $frontier?.cmdr !== undefined }
<h5 class="ui header">
    Авторизованы как: {$frontier?.cmdr}
</h5>
{/if}

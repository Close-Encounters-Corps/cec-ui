<script lang="ts">
    import { currentUser, type DiscordUser, type UserOrNull } from "$lib/user";
    import { derived, type Readable } from "svelte/store";
    let discord = derived(currentUser, ($currentUser => $currentUser?.providers.DISCORD.info))
</script>

<h4 class="ui top attached dividing header">
    Discord
</h4>
<h5 class="ui header">
    {#if $discord?.globalName !== undefined}
    Авторизованы как: {$discord?.globalName}
    {/if}
</h5>
<div class="ui container">
</div>

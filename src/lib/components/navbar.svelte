<script lang="ts">
    import type { UserOrNull } from "$lib/user";
    export let user: UserOrNull;
</script>

<div>
    <nav class="ui inverted menu" id="navbar">
        <div class="ui container">
            <a class="ui item brand" href="/"><img src="/logo.svg" alt="CEC logo"></a>
            <a href="/about-us" class="ui item">О НАС</a>
            <div class="right menu">
            {#if user !== undefined && user !== null}
                <div class="ui dropdown middle item centered">
                    <div class="ui text">Аккаунт</div>
                    <div class="ui menu">
                        <a class="ui item" href="/user/me">Профиль</a>
                        {#if user.principal?.isAdmin}
                        <a href="/admin" class="ui item">Панель управления</a>
                        {/if}
                    </div>
                </div>
            {/if}
            </div>
        </div>
    </nav>
</div>

<style>
    #navbar {
        background: #1E1E1E !important;
        margin-top: 0rem;
        margin-bottom: 0rem;
        height: 8vh;
        border-radius: 0%;
    }
</style>
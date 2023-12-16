<script lang="ts">
    import { currentUser, type UserOrNull } from "$lib/user"
    import Modal from "./modal.svelte"

    const discord = () => {
        window.open("/api/v1/auth/discord/login")
    }
    const frontier = () => {
        window.open("/api/v1/auth/frontier/login")
    }
</script>

<Modal title="Требуется авторизация" open={$currentUser === null} >
    <div slot="content">
        <span>Данная страница доступна только авторизованным пользователям.</span>
        <span>Войдите в систему одним из доступных способов:</span>    
    </div>
    <div class="ui centered container" slot="actions">
        <button class="ui button" on:click={discord}>Discord</button>
        <button class="ui button" on:click={frontier}>Elite Dangerous</button>
    </div>
</Modal>

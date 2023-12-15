<script lang="ts">
    import { currentUser, type UserOrNull } from "$lib/user"
    import Modal from "./modal.svelte"

    const discord = () => {
        const u = window.location.pathname
        window.open("/api/v1/auth/discord/login")
    }
</script>

<Modal title="Требуется авторизация" open={$currentUser === null} >
    <div slot="content">
        <span>Данная страница доступна только авторизованным пользователям.</span>
        <span>Войдите в систему одним из доступных способов:</span>    
    </div>
    <div class="ui centered container" slot="actions">
        <button class="ui button" on:click={discord}>Discord</button>
    </div>
</Modal>

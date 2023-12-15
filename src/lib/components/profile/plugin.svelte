<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    const token = writable<any>(null)
    onMount(async () => {
        const resp = await fetch("/api/v1/brick/token")
        if (resp.status == 200)
            token.set(await resp.json())
        else token.set(null)
    })

    async function newToken() {
        const resp = await fetch("/api/v1/brick/token", {
            method: "POST"
        })
        if (resp.status == 200) {
            token.set(await resp.json())
        }
    }

</script>

<h4 class="ui top attached header">
    Brick плагин
    {#if $token === null}
        <button class="ui right top attached tiny blue button" on:click={newToken}>Создать токен</button>
    {/if}
</h4>
<div class="ui attached segment menu-panel">
    <div class="ui list">
        <div class="item">
            API-токены используются для доступа плагина Brick к системе CEC.
        </div>
        {#if $token !== null}
            <div class="item">
                <i class="key large icon"></i>
                <div class="content">
                    <strong>{ $token.token }</strong>
                    <div class="activity meta">
                        <p>
                            <i class="info circle icon"></i>
                            Создан { $token.whenIssued }
                            <br />
                            <i class="info circle icon"></i>
                            Использовался { $token.lastUsed }
                        </p>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>
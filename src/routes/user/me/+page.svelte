<script lang="ts">
    import { currentUser, getCurrentUser, type UserInfo, type UserOrNull } from "$lib/user";
    import Navbar from "$lib/components/navbar.svelte";
    import type { TabItem } from "$lib/tab";
    import Tabs from "$lib/components/tabs.svelte";
    import Settings from "$lib/components/profile/settings.svelte";
    import Plugin from "$lib/components/profile/plugin.svelte";
    import { onMount } from "svelte";
    import jQuery from 'jquery/dist/jquery.slim'
    import EnsureLogged from "$lib/components/ensureLogged.svelte";

    let user: UserOrNull
    onMount(async () => {
        // @ts-ignore
        if (!window.jQuery) window.jQuery = jQuery
        await import('fomantic-ui/dist/semantic.min.css')
        // @ts-ignore
        await import('fomantic-ui/dist/semantic.min.js')
        fetch("/api/v1/users/me").then((response) =>
            response.status === 200 ?response.json().then(currentUser.set) : currentUser.set(null)
        )
    })
    const items: Array<TabItem> = [
        {key: "settings", label: "Настройки", component: Settings},
        {key: "brick", label: "Плагин", component: Plugin},
    ]
</script>

<EnsureLogged />
<Navbar user={user} />
<div class="ui full height">
    <main class="ui container">
        <Tabs items={items} />
    </main>
</div>


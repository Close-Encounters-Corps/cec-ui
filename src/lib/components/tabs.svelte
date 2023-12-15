<script lang="ts">
    import type { Tab, TabItem } from "$lib/tab";

    export let items: Array<TabItem> = []

    let tabs: Array<Tab> = items.map((v, i) => ({item: v, active: false, index: i}))
    export let activeTab = 0
    function handleClick(tabValue: number) {
        return function() {
            activeTab = tabValue
        }
    }
</script>

<div class="ui top attached secondary menu">
    {#each tabs as tab}
        {#if tab.active}
            <a class="ui item active" on:click={handleClick(tab.index)}>{tab.item.label}</a>
        {:else}
            <a class="ui item" on:click={handleClick(tab.index)}>{tab.item.label}</a>
        {/if}
    {/each}
</div>
<div class="ui bottom attached segment tab-content">
    {#each tabs as tab}
        {#if activeTab === tab.index}
            <svelte:component this={tab.item.component} />
        {/if}
    {/each}
</div>

<style>
    .tab-content {
        background: #F5F5F5;
        border-radius: 5px;
    }
</style>

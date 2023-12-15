<script lang="ts">
    export let title: string
    export let open: boolean
    function trigger(node: any, opened: boolean) {
        return {
            update(opened: boolean) {
                jQuery(node).modal("show")
            }
        }
    }
</script>

<div use:trigger={open} class="ui modal">
    <i class="close icon"></i>
    <div class="header">{title}</div>
    <div class="content">
        <slot name="content" />
    </div>
    <div class="actions">
        <slot name="actions" />
    </div>
</div> 

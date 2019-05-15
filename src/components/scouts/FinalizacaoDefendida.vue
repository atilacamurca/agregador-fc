<template>
    <div class="pl-3" v-b-tooltip.hover.left="'Finalização defendida'">
        FD
        <b-badge variant="success" class="ml-2">{{ fd }}</b-badge>
    </div>
</template>

<script>
export default {
    props: {
        fd: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>

</style>

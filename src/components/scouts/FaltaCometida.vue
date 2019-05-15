<template>
    <div class="pl-3" v-b-tooltip.hover.left="'Falta cometida'">
        FC
        <b-badge variant="danger" class="ml-2">{{ fc }}</b-badge>
    </div>
</template>

<script>
export default {
    props: {
        fc: {
            type: Number,
            required: true
        }
    }
}
</script>

<template>
    <div class="pl-3" v-b-tooltip.hover.left="'Pênalti perdido'">
        PP
        <b-badge variant="danger" class="ml-2">{{ pp }}</b-badge>
    </div>
</template>

<script>
export default {
    props: {
        pp: {
            type: Number,
            required: true
        }
    }
}
</script>

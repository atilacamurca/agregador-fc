<template>
    <div class="pl-3" v-b-tooltip.hover.left="'Finalização para fora'">
        FF
        <b-badge variant="success" class="ml-2">{{ ff }}</b-badge>
    </div>
</template>

<script>
export default {
    props: {
        ff: {
            type: Number,
            required: true
        }
    }
}
</script>

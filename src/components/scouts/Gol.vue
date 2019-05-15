<template>
    <div class="pl-3" v-b-tooltip.hover.left="'Gol'">
        <span>&nbsp;&nbsp;G</span>
        <b-badge variant="success" class="ml-2">{{ g }}</b-badge>
    </div>
</template>

<script>
export default {
    props: {
        g: {
            type: Number,
            required: true
        }
    }
}
</script>

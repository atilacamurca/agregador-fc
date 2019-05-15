<template>
    <div class="pl-3" v-b-tooltip.hover.left="'Impedimento'">
        &nbsp;&nbsp;&nbsp;&nbsp;I
        <b-badge variant="danger" class="ml-2">{{ i }}</b-badge>
    </div>
</template>

<script>
export default {
    props: {
        i: {
            type: Number,
            required: true
        }
    }
}
</script>

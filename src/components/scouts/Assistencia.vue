<template functional>
    <scout :scout="props.a"
        tooltip="Assistência"
        label="A"
        variant="success"
        :multiplier="5"
        :show-multiplier="props.showMultiplier"
        :show-total="props.showTotal"
    ></scout>
</template>

<script>
export default {
    props: {
        a: {
            type: Number,
            required: true
        },
        showMultiplier: {
            type: Boolean,
            default: false
        },
        showTotal: {
            type: Boolean,
            default: false
        }
    }
}
</script>

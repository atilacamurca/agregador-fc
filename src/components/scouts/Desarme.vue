<template functional>
    <scout :scout="props.ds"
        tooltip="Desarme"
        label="DS"
        variant="success"
        :multiplier="1"
        :show-multiplier="props.showMultiplier"
        :show-total="props.showTotal"
    ></scout>
</template>

<script>
export default {
    props: {
        ds: {
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

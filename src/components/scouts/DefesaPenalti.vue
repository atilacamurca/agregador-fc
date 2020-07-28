<template functional>
    <scout :scout="props.dp"
        tooltip="Defesa de pênalti"
        label="DP"
        variant="success"
        :multiplier="7"
        :show-multiplier="props.showMultiplier"
        :show-total="props.showTotal"
    ></scout>
</template>

<script>
export default {
    props: {
        dp: {
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

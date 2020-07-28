<template functional>
    <scout :scout="props.pp"
        tooltip="Pênalti perdido"
        label="PP"
        variant="danger"
        :multiplier="-4"
        :show-multiplier="props.showMultiplier"
        :show-total="props.showTotal"
    ></scout>
</template>

<script>
export default {
    props: {
        pp: {
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

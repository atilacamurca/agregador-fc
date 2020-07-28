<template functional>
    <scout :scout="props.pe"
        tooltip="Passe errado"
        label="PE"
        variant="danger"
        :multiplier="-0.3"
        :show-multiplier="props.showMultiplier"
        :show-total="props.showTotal"
    ></scout>
</template>

<script>
export default {
    props: {
        pe: {
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

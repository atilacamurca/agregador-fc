<template functional>
    <scout :scout="props.gc"
        tooltip="Gol contra"
        label="GC"
        variant="danger"
        :multiplier="-5"
        :show-multiplier="props.showMultiplier"
        :show-total="props.showTotal"
    ></scout>
</template>

<script>
export default {
    functional: true,
    props: {
        gc: {
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

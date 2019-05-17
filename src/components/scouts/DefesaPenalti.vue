<template functional>
    <scout :scout="props.dp"
        tooltip="Defesa de pênalti"
        label="DP"
        variant="success"
    ></scout>
</template>

<script>
export default {
    props: {
        dp: {
            type: Number,
            required: true
        }
    }
}
</script>

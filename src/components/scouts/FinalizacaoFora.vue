<template functional>
    <scout :scout="props.ff"
        tooltip="Finalização para fora"
        label="FF"
        variant="success"
    ></scout>
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

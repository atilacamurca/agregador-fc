<template functional>
    <scout :scout="props.pi"
        tooltip="Passe Incompleto"
        label="PI"
        variant="danger"
    ></scout>
</template>

<script>
export default {
    props: {
        pi: {
            type: Number,
            required: true
        }
    }
}
</script>

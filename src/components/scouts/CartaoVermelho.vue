<template functional>
    <scout :scout="props.cv"
        tooltip="Cartão vermelho"
        label="CV"
        variant="danger"
    ></scout>
</template>

<script>
export default {
    props: {
        cv: {
            type: Number,
            required: true
        }
    }
}
</script>

<template functional>
    <scout :scout="props.ca"
        tooltip="Cartão amarelo"
        label="CA"
        variant="danger"
    ></scout>
</template>

<script>
export default {
    props: {
        ca: {
            type: Number,
            required: true
        }
    }
}
</script>

<template functional>
    <scout :scout="props.pe"
        tooltip="Passe errado"
        label="PE"
        variant="danger"
    ></scout>
</template>

<script>
export default {
    props: {
        pe: {
            type: Number,
            required: true
        }
    }
}
</script>

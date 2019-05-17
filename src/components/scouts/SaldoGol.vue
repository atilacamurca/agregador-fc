<template functional>
    <scout :scout="props.sg"
        tooltip="Saldo de gols"
        label="SG"
        variant="success"
    ></scout>
</template>

<script>
export default {
    props: {
        sg: {
            type: Number,
            required: true
        }
    }
}
</script>

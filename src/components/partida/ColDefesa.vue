<template functional>
    <b-col sm="6" md="4">
        <h5><b-badge pill variant="primary">DEFESA</b-badge></h5>
        <saldo-gol :sg="props.sg"></saldo-gol>
    </b-col>
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

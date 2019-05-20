<template functional>
    <b-col sm="6" md="4">
        <div>DEFESA</div>
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

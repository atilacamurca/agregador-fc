<template functional>
    <b-col sm="6" md="5" offset-md="1">
        <h5><b-badge pill variant="primary">GOLEIROS</b-badge></h5>
        <defesa-dificil :dd="props.dd"></defesa-dificil>
        <gol-sofrido :gs="props.gs"></gol-sofrido>
        <defesa-penalti :dp="props.dp"></defesa-penalti>
    </b-col>
</template>

<script>
export default {
    props: {
        dd: {
            type: Number,
            required: true
        },
        dp: {
            type: Number,
            required: true
        },
        gs: {
            type: Number,
            required: true
        }
    }
}
</script>

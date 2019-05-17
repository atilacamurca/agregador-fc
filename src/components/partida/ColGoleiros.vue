<template functional>
    <b-col md="3" offset-md="2">
        <div>GOLEIROS</div>
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

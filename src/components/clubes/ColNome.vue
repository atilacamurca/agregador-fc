<template functional>
    <b-col cols="6" md="5"
        class="d-flex align-items-center justify-content-center"
        v-bind="data.attrs">
        <div class="lead mr-sm-3 text-center">
            {{ props.posicao }} &deg; &bull; {{ props.nome }}
        </div>
    </b-col>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            required: true
        },
        posicao: {
            type: Number,
            required: true
        }
    }
}
</script>

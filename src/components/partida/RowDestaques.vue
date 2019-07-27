<template functional>
    <b-row>
        <b-col v-for="atleta in props.destaques" :key="atleta.atleta_id"
            md="6" class="mb-2">
            <dados-atleta
                v-bind="atleta"
                :urlPontuacao="props.urlPontuacao(atleta.atleta_id)"
            ></dados-atleta>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        destaques: {
            type: Array,
            required: true
        },
        urlPontuacao: {
            type: Function,
            required: true
        }
    }
}
</script>

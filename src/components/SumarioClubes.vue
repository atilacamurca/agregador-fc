<template>
    <b-row>
        <b-col md="12">
            <b-row>
                <col-nome :nome="clubeCasa"></col-nome>
                <b-col md="2"
                    class="d-flex align-items-center justify-content-center">
                    <div class="mx-4">
                        <b-img width="40px" :src="escudoCasa" alt="escudo-casa"></b-img>
                    </div>
                    <div class="text-center lead">X</div>
                    <div class="mx-4">
                        <b-img width="40px" :src="escudoVisitante" alt="escudo-visitante"></b-img>
                    </div>
                </b-col>
                <col-nome :nome="clubeVisitante"></col-nome>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
import ColNome from './clubes/ColNome'

export default {
    components: {
        ColNome
    },
    props: {
        clubeCasa: {
            type: String,
            required: true
        },
        clubeVisitante: {
            type: String,
            required: true
        },
        escudoCasa: {
            type: String,
            required: true
        },
        escudoVisitante: {
            type: String,
            required: true
        },
    }
}
</script>

<style>

</style>

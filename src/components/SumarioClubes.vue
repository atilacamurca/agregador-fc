<template functional>
    <b-row>
        <b-col md="12">
            <b-row>
                <col-nome :nome="props.clubeCasa" order="2" order-md="1"></col-nome>
                <b-col cols="12" md="2"
                    class="d-flex align-items-center justify-content-sm-center justify-content-around"
                    order="1"
                    order-md="2">
                    <div class="mx-4">
                        <b-img-lazy width="40px"
                            :src="props.escudoCasa"
                            alt="escudo-casa"></b-img-lazy>
                    </div>
                    <div class="text-center d-flex flex-direction-column lead">
                        <span>{{ props.placarMandante }}</span>
                        <span class="mx-2">X</span>
                        <span>{{ props.placarVisitante }}</span>
                    </div>
                    <div class="mx-4">
                        <b-img-lazy width="40px"
                            :src="props.escudoVisitante"
                            alt="escudo-visitante"></b-img-lazy>
                    </div>
                </b-col>
                <col-nome :nome="props.clubeVisitante" order="3" order-md="3"></col-nome>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
export default {
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
        placarMandante: null,
        placarVisitante: null
    }
}
</script>

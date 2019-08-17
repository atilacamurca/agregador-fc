<template functional>
    <b-row>
        <b-col md="12">
            <b-row>
                <col-nome
                    :nome="props.clubeCasa"
                    :posicao="props.clubeCasaPosicao"
                    order="2"
                    order-md="1"
                ></col-nome>
                <b-col cols="12" md="2"
                    class="d-flex align-items-center justify-content-sm-center justify-content-around"
                    order="1"
                    order-md="2">
                    <div class="mx-2">
                        <g-image width="40px"
                            :src="props.escudoCasa"
                            alt="escudo-casa"
                            style="width: 40px; height: 40px;"
                        ></g-image>
                    </div>
                    <div class="text-center d-flex flex-direction-column lead">
                        <span>{{ props.placarMandante }}</span>
                        <span class="mx-2">X</span>
                        <span>{{ props.placarVisitante }}</span>
                    </div>
                    <div class="mx-2">
                        <g-image width="40px"
                            :src="props.escudoVisitante"
                            alt="escudo-visitante"
                            style="width: 40px; height: 40px;"
                        ></g-image>
                    </div>
                </b-col>
                <col-nome
                    :nome="props.clubeVisitante"
                    :posicao="props.clubeVisitantePosicao"
                    order="3"
                    order-md="3"
                ></col-nome>
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
        placarVisitante: null,
        clubeCasaPosicao: {
            type: Number,
            required: true
        },
        clubeVisitantePosicao: {
            type: Number,
            required: true
        }
    }
}
</script>

<template functional>
    <b-row>
        <b-col cols="12" lg="6">
            <div class="rounded shadow-sm bg-white">
                <div class="text-center lead my-2">
                    <div><strong>{{ props.gols_marcados_total }}</strong> gols</div>
                    <div>marcados</div>
                </div>
                <div class="d-flex justify-content-around align-self-center w-100 mb-2 border-bottom text-success rounded-bottom">
                    <div class="d-flex flex-column align-items-center">
                        <div>Casa</div>
                        <div class="display-5">{{ props.gols_marcados_casa }}</div>
                    </div>
                    <div class="d-flex flex-column align-items-center">
                        <div>Fora</div>
                        <div class="display-5">{{ props.gols_marcados_fora }}</div>
                    </div>
                </div>
            </div>
        </b-col>
        <b-col cols="12" lg="6">
            <div class="rounded shadow-sm bg-white">
                <div class="text-center lead my-2">
                    <div><strong>{{ props.gols_sofridos_total }}</strong> gols</div>
                    <div>sofridos</div>
                </div>
                <div class="d-flex justify-content-around align-self-center w-100 text-danger">
                    <div class="d-flex flex-column align-items-center">
                        <div>Casa</div>
                        <div class="display-5">{{ props.gols_sofridos_casa }}</div>
                    </div>
                    <div class="d-flex flex-column align-items-center">
                        <div>Fora</div>
                        <div class="display-5">{{ props.gols_sofridos_fora }}</div>
                    </div>
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        gols_marcados_total: {
            type: Number,
            required: true
        },
        gols_sofridos_total: {
            type: Number,
            required: true
        },
        gols_marcados_casa: {
            type: Number,
            required: true
        },
        gols_sofridos_casa: {
            type: Number,
            required: true
        },
        gols_marcados_fora: {
            type: Number,
            required: true
        },
        gols_sofridos_fora: {
            type: Number,
            required: true
        }
    }
}
</script>

<template functional>
    <b-row>
        <b-col md="10" offset-md="1">
            <div class="d-flex w-100 justify-content-between">
                <div class="d-flex align-items-center">
                    <g-image
                        :src="props.escudo_60"
                        :alt="props.clube_abrev"
                        style="width: 40px;height: 40px"
                    ></g-image>
                    <h5 class="ml-2 ml-lg-4">{{ props.nome_fantasia }}</h5>
                </div>
                <div class="d-flex align-items-center">
                    <h4><b-badge variant="success">{{ props.posicao }} &deg;</b-badge></h4>
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        escudo_60: {
            type: String,
            required: true
        },
        clube_abrev: {
            type: String,
            required: true
        },
        nome_fantasia: {
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

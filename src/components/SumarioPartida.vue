<template functional>
    <b-row>
        <b-col class="d-flex justify-content-center pb-3">
            <strong class="text-capitalize">{{ props.partidaData | diaMes }}</strong>
            <span class="mx-2">{{ props.local }}</span>
            <strong>{{ props.partidaData | horario }}</strong>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        partidaData: {
            type: String,
            required: true
        },
        local: {
            type: String,
            required: true
        }
    }
}
</script>

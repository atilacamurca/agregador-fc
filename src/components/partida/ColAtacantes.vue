<template functional>
    <b-col md="12" :class="data.staticClass || ''">
        <div>ATACANTES</div>
        <b-row>
            <b-col md="4">
                <gol :g="props.g"></gol>
                <finalizacao-fora :ff="props.ff"></finalizacao-fora>
                <falta-cometida :fc="props.fc"></falta-cometida>
            </b-col>
            <b-col md="4" offset-md="1">
                <assistencia :a="props.a"></assistencia>
                <finalizacao-defendida :fd="props.fd"></finalizacao-defendida>
                <impedimento :i="props.i"></impedimento>
                <penalti-perdido :pp="props.pp"></penalti-perdido>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
export default {
    props: {
        g: {
            type: Number,
            required: true
        },
        a: {
            type: Number,
            required: true
        },
        ff: {
            type: Number,
            required: true
        },
        fd: {
            type: Number,
            required: true
        },
        fc: {
            type: Number,
            required: true
        },
        i: {
            type: Number,
            required: true
        },
        pp: {
            type: Number,
            required: true
        }
    }
}
</script>

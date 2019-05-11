<template>
    <b-col md="12">
        <div>ATACANTES</div>
        <b-row>
            <b-col md="6">
                <div class="pl-3">
                    &nbsp;&nbsp;G
                    <b-badge variant="success" class="ml-2">{{ g }}</b-badge>
                </div>
                <div class="pl-3">
                    &nbsp;&nbsp;A
                    <b-badge variant="success" class="ml-2">{{ a }}</b-badge>
                </div>
                <div class="pl-3">
                    FF
                    <b-badge variant="success" class="ml-2">{{ ff }}</b-badge>
                </div>
                <div class="pl-3">
                    FD
                    <b-badge variant="success" class="ml-2">{{ fd}}</b-badge>
                </div>
            </b-col>
            <b-col md="6">
                <div class="pl-3">
                    FC
                    <b-badge variant="danger" class="ml-2">{{ fc }}</b-badge>
                </div>
                <div class="pl-3">
                    &nbsp;&nbsp;&nbsp;&nbsp;I
                    <b-badge variant="danger" class="ml-2">{{ i }}</b-badge>
                </div>
                <div class="pl-3">
                    PP
                    <b-badge variant="danger" class="ml-2">{{ pp }}</b-badge>
                </div>
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

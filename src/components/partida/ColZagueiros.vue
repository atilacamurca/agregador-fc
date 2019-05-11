<template>
    <b-col md="12">
        <div>ZAGUEIROS</div>
        <b-row>
            <b-col md="6">
                <div class="pl-3">
                    RB
                    <b-badge variant="success" class="ml-2">{{ rb }}</b-badge>
                </div>
                <div class="pl-3">
                    &nbsp;&nbsp;G
                    <b-badge variant="success" class="ml-2">{{ g }}</b-badge>
                </div>
            </b-col>
            <b-col md="6">
                <div class="pl-3">
                    GC
                    <b-badge variant="danger" class="ml-2">{{ gc }}</b-badge>
                </div>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
export default {
    props: {
        rb: {
            type: Number,
            required: true
        },
        g: {
            type: Number,
            required: true
        },
        gc: {
            type: Number,
            required: true
        }
    }
}
</script>

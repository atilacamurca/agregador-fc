<template functional>
    <scout :scout="props.pp"
        tooltip="Pênalti perdido"
        label="PP"
        variant="danger"
    ></scout>
</template>

<script>
export default {
    props: {
        pp: {
            type: Number,
            required: true
        }
    }
}
</script>

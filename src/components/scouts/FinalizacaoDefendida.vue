<template functional>
    <scout :scout="props.fd"
        tooltip="Finalização defendida"
        label="FD"
        variant="success"
    ></scout>
</template>

<script>
export default {
    props: {
        fd: {
            type: Number,
            required: true
        }
    }
}
</script>

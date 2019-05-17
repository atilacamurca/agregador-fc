<template functional>
    <scout :scout="props.fc"
        tooltip="Falta cometida"
        label="FC"
        variant="danger"
    ></scout>
</template>

<script>
export default {
    props: {
        fc: {
            type: Number,
            required: true
        }
    }
}
</script>

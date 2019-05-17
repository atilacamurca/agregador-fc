<template functional>
    <scout :scout="props.rb"
        tooltip="Roubada de bola"
        label="RB"
        variant="success"
    ></scout>
</template>

<script>
export default {
    props: {
        rb: {
            type: Number,
            required: true
        }
    }
}
</script>

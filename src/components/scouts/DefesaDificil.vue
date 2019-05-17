<template functional>
    <scout :scout="props.dd"
        tooltip="Defesa difícil"
        label="DD"
        variant="success"
    ></scout>
</template>

<script>
export default {
    props: {
        dd: {
            type: Number,
            required: true
        }
    }
}
</script>

<template functional>
    <scout :scout="props.ds"
        tooltip="Desarme"
        label="DS"
        variant="success"
    ></scout>
</template>

<script>
export default {
    props: {
        ds: {
            type: Number,
            required: true
        }
    }
}
</script>

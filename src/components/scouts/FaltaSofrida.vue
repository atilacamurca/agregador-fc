<template functional>
    <scout :scout="props.fs"
        tooltip="Falta sofrida"
        label="FS"
        variant="success"
    ></scout>
</template>

<script>
export default {
    props: {
        fs: {
            type: Number,
            required: true
        }
    }
}
</script>

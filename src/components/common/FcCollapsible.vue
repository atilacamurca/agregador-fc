<template functional>
    <div class="wrap-collabsible">
        <input :id="`collapsible-${props.id}`" class="toggle" type="checkbox">
        <label :for="`collapsible-${props.id}`" class="lbl-toggle">
            <slot name="title"></slot>
        </label>
        <div class="collapsible-content">
            <div class="content-inner">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            required: true
        }
    }
}
</script>

<style scoped>
input[type='checkbox'] {
  display: none;
}
.lbl-toggle {
  display: block;
  cursor: pointer;
  transition: all 0.25s ease-out;
}
.collapsible-content {
  max-height: 0px;
  overflow: hidden;

  transition: max-height .50s ease-in-out;
}
.toggle:checked + .lbl-toggle + .collapsible-content {
  max-height: 5000px;
}
</style>

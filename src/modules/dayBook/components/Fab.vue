<template>
  <button class="btn btn-primary">
    <i class="fa fa-1x"
       :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: 'fa-plus'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 35px;
  height: 50px;
  position: fixed;
  right: 25px;
  width: 50px;
}
</style>

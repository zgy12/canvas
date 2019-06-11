<template>
    <div class="container">
      <canvas :height="height" :width="width"></canvas>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        height: 300,
        width: 400
      }
    }
  }
</script>

<style>

</style>
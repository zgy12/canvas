<template>
  <div id="app">
      <Header></Header>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/common/header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="less" >

</style>

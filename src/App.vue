<template>
  <div id="app">
    <div class="div1"></div>
    <van-button type="primary">主要按钮</van-button>
    <i class="toutiao toutiao-dianzan"></i>
    <h1>APP</h1>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
.div1{
  height: 100px;
  width: 100px;
  background-color:red
}
</style>

<template>
<div class="layout-container">
<!--  路由出口-->
  <router-view></router-view>
<!--  底部导航-->
  <van-tabbar route>
    <van-tabbar-item replace to="/home">
      <i slot="icon" class="toutiao toutiao-shouye"></i>
      <span>首页</span>
    </van-tabbar-item>
    <van-tabbar-item replace to="/qa">
      <i slot="icon" class="toutiao toutiao-wenda"></i>
      <span>问答</span>
    </van-tabbar-item>
    <van-tabbar-item replace to="/video">
      <i slot="icon" class="toutiao toutiao-shipin"></i>
      <span>视频</span>
    </van-tabbar-item>
    <van-tabbar-item replace to="/my">
      <i slot="icon" class="toutiao toutiao-wode"></i>
      <span>我的</span>
    </van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>

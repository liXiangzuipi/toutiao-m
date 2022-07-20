<template>
<div class="login-container">
<!--  头部导航-->
  <van-nav-bar
    class="page-nav-bar"
    :title="$route.meta.title"
    fixed
    placeholder
  />
<!--  表单-->
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="手机号"
      placeholder="手机号"
    >
      <i slot="left-icon" class="toutiao toutiao-shouji"></i>
    </van-field>
    <van-field
      v-model="password"
      type="password"
      name="密码"
      placeholder="密码"
    >
      <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
      <template #button>
        <van-button class="send-sms-btn" round >发送验证码</van-button>
      </template>
    </van-field>
    <div style="margin: 16px;">
      <van-button block type="info" native-type="submit">登录</van-button>
    </div>
  </van-form>
</div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },

  },
}
</script>

<style scoped lang="less">
.login-container{
  .toutiao{
    font-size: 37px;
  }
  //验证码按扭
  .send-sms-btn{
    width: 152px;
    height: 46px;
    line-height: 46px;
    font-size: 22px;
    background-color: #ededed;
    padding: 0;
  }

}
</style>

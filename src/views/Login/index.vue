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
      v-model="user.mobile"
      name="mobile"
      placeholder="手机号"
    >
      <i slot="left-icon" class="toutiao toutiao-shouji"></i>
    </van-field>
    <van-field
      v-model="user.code"
      name="code"
      placeholder="请输入验证码"
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
import {login} from "@/api/user";
export default {
  name: "index",
  data() {
    return {
      user:{
        mobile:'17723567697',
        code:'246810'
        // mobile: '13911111111',
        // code: '246810'
      }
    };
  },
  methods: {
    async onSubmit() {
    //  获取表单信息
      let user=this.user

      try {
        let res=await login(user)
        console.log(res)
      }catch (e) {
        console.log(e)
      }


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

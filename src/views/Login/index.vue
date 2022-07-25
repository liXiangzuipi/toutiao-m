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
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field
        :rules="userFormRules.mobile"
        v-model="user.mobile"
        name="mobile"
        placeholder="手机号"
        type="number"
        maxlength="11"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji"></i>
      </van-field>
      <van-field
        type="number"
        :rules="userFormRules.code"
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        maxlength="6"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <template #button>
          <van-count-down v-if="timeShow" @finish="timeShow=false" format="ss 秒" :time="time" />
          <van-button v-else native-type="button" @click="onSendSms" class="send-sms-btn" round>发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button  block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {login,sendSms} from "@/api/user";
import {Toast} from "vant";

export default {
  name: "index",
  data() {
    return {
      user: {
        mobile: '17723567697',
        code: '246810'
        // mobile: '13911111111',
        // code: '246810'
      },
      userFormRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3|5|7|8]\d{9}$/,
          message: '手机号错误'
        }],
        code: [
          {
            required: true,
            message: '验证码不能为空'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码错误'
          }
        ]
      },
    //  验证码倒计时
      time:3*1000,
    //  倒计时展示
      timeShow:false,
    };
  },
  methods: {
    //登录
    async onSubmit() {
      //  获取表单信息
      let user = this.user
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
      });
      try {
        let res = await login(user)
        Toast("登录成功")
        let data=res.data.data
        //vuex 保存
        this.$store.commit('setUser',data)
        console.log(res)
      } catch (e) {
        console.log(e)
        Toast.fail('登录失败')
      }


    },
  //  发送验证码
    async onSendSms(){
    //  该按钮设置为 native-button 因为会触发提交按钮
    //  1.验证手机号
      try {
        this.$refs.loginForm.validate('mobile')
        // this.$toast()
      }catch (e) {
        console.log('手机号验证失败')
        return console.log(e)
      }
    //  2.验证通过 倒计时
      this.timeShow=true
    //  3.发送验证码
      try {
        let res=await sendSms(this.user.mobile)

        console.log(res)
      }catch (e) {
        console.log('发送验证码错误')
        console.log(e)
      }

    }

  },
}
</script>

<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }

  //验证码按扭
  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    font-size: 22px;
    background-color: #ededed;
    padding: 0;
  }

}
</style>

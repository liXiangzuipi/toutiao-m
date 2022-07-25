<template>
  <div class="my-container">
    <div class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-image" src="~@/assets/mobile.png" alt="">
        <span class="text">登录/注册</span>
      </div>
    </div>
    <div class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image
            round
            fit="cover"
            class="avatar"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <span class="text">黑马头条</span>
        </div>
        <div class="right">
          <van-button round size="mini">编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="less">
.my-container{
  .header{
    height: 316px;
    //background-color: red;
    background: url("~@/assets/banner.png");
    background-size: cover;
  }
  .not-login{
    display: flex;
    justify-content: center;
    align-content: center;
    .login-btn{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .mobile-image{
        height: 132px;
        width: 132px;
        margin-bottom: 15px;
      }
      .text{
        font-size: 28px;
        color: #fff;
      }
    }
  }
  .user-info{
    .base-info{
      height: 231px;
      //background-color: red;
      padding: 76px 32px 23px ;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{
        display: flex;
        justify-content: center;
        align-items: center;
        .avatar{
          border: 2px solid #fff;
          width: 132px;
          height: 132px;
          margin-right: 10px;
        }
        .text{
          font-size: 30px;
          color: #fff;
        }
      }

    }
    .data-stats{
      //border: 1px solid black;
      //background-color: #9a6e3a;
      display: flex;
      .data-item{
        height: 85px;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;
        .count{
          font-size: 36px;
        }
        .text{
          font-size: 22px;
        }
      }
    }
  }
}

</style>

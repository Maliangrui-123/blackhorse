<template>
  <div class="login">
    <!-- 放置一个卡片组件 -->
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 登录组件，表单 -->
      <el-form style="margin-top:30px" :model="loginForm" :rules="loginRules" >
        <!-- 如果要放input标签还要放在el-form-item里面，表单域 -->
        <el-form-item prop="mobile">
          <!-- 登录手机号 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <!-- 登录验证码 -->
          <el-input style="width:65%" placeholder="请输入验证码"></el-input>
          <el-button v-model="loginForm.code" plain style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <!-- 勾选条例 -->
          <el-checkbox>
              我已经阅读并同意用户协议和隐私条款
          </el-checkbox>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
            <el-button v-model="loginForm.check" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 放置登录表单 -->
  </div>
</template>

<script>
export default {
  // 在data中定义表单数据对象
  data () {
    return {
      // 定义一个对象
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 是否勾选
      },
      loginRules: {

      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 440px;
    height: 350px;
    .title {
      text-align: center;
      img {
        height: 44px;
      }
    }
  }
}
</style>

<template>
  <div class="login">
    <!-- 放置一个卡片组件 -->
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form style="margin-top:30px">
        <!-- 如果要放input标签还要放在el-form-item里面，表单域 -->
        <el-form-item>
          <!-- 登录手机号 -->
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <!-- 登录验证码 -->
          <el-input style="width:65%" placeholder="请输入验证码"></el-input>
          <el-button plain style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <!-- 勾选条例 -->
          <el-checkbox>
              我已经阅读并同意用户协议和隐私条款
          </el-checkbox>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
            <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 放置登录表单 -->
  </div>
</template>

<script>
export default {}
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

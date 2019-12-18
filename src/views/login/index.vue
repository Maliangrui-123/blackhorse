<template>
  <div class="login">
    <!-- 放置一个卡片组件 -->
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 登录组件，表单 -->
      <el-form ref="myForm" style="margin-top:30px" :model="loginForm" :rules="loginRules" >
        <!-- 如果要放input标签还要放在el-form-item里面，表单域 -->
        <el-form-item prop="mobile">
          <!-- 登录手机号 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <!-- 登录验证码 -->
          <el-input v-model="loginForm.code" style="width:65%" placeholder="请输入验证码"></el-input>
          <el-button  plain style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <!-- 勾选条例 -->
          <el-checkbox v-model="loginForm.check">
              我已经阅读并同意用户协议和隐私条款
          </el-checkbox>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
            <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
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
        mobile: '',
        code: '',
        check: false
      },
      loginRules: {
        mobile: [{ required: true, message: '请输入你的手机号' }, {
          pattern: /^1[3456789]\d{9}$/, message: '输入的格式不正确'
        }], // 手机号
        code: [{ required: true, message: '请输入您的验证码' }, {
          pattern: /^\d{6}$/,
          message: '验证码格式不正确'
        }], // 验证码

        check: [{ validator: function (rule, value, callback) {
          // rule 指当前规则，没什么用
          // value 指我们要校验的字段的值
          if (value) {
            // 如果是true就认识校验通过
            callback() // 直接执行callback认为通过
          } else {
            // 认为校验不通过 要提示信息
            callback(new Error('你必须无条件同意被我们坑'))
          }
        } }] // 是否勾选
      }
    }
  },
  methods: {
    // 提交登录表单
    submitLogin () {
      this.$refs.myForm.validate(function (isOK) {
        if (isOK) {
          //  认为前方所有表单格式正确
          console.log('前端校验成功')
        }
      })
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

<template>
  <!-- 头部组件 -->
  <!-- el-row是一行 -->
  <el-row class="layout-header" type="flex" align="middle" justify="space-between">
    <!-- el-col是列 :span是宽的属性-->
    <el-col class="left" :span="6">
      <!-- 左侧图标 -->
      <i class="el-icon-s-unfold"></i>
      <span style="margin-left:4px;color:#2c3e50;font-size:16px">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span="4">
      <el-row type="flex" justify="end" align="middle">
        <img :src="!userInfo.photo ? userInfo.photo : defaultImg" alt />
        <!-- 下拉菜单的容器el-dropdown -->
        <el-dropdown @command="handle">
            <span>{{!userInfo.name ? userInfo.name : defaultname}}</span>
            <!-- 下拉菜单 -->
            <el-dropdown-menu slot="dropdown">
                <!-- 菜单内容 -->
                <el-dropdown-item command="info">个人信息</el-dropdown-item>
                <el-dropdown-item command="git">Git地址</el-dropdown-item>
                <el-dropdown-item command="lgout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}, // 用户信息
      defaultImg: require('../../assets/img/微信图片_20191220145559.png'),
      defaultname: 'tonyの马'
    }
  },
  created () {
    // 查询数据
    this.$axios({
      url: '/user/profile'
    }).then(result => {
      this.userInfo = result.data // 获取用户的个人信息
    })
  },
  methods: {
    handle (commad) {
      // 需要区分点击的菜单项
      if (commad === 'lgout') {
        // 退出
        window.localStorage.removeItem('user-token') // 删除用户的令牌
        this.$router.push('/login')
      } else if (commad === 'git') {
        window.location.href = 'https://github.com/Maliangrui-123/blackhorse'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  height: 60px;
  .left {
    font-size: 18px;
  }
  .right {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}
</style>

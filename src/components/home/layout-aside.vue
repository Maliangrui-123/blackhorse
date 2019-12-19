<template>
<div class="layout-aside">
    <div class="title">
        <img src="../../assets/img/logo_admin.png" alt="">
    </div>
    <!-- 放置导航组件 -->
  <el-menu background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">
      <!-- 一级导航，没有下拉菜单 -->
      <el-menu-item index="1">
          首页
      </el-menu-item>
      <!-- 二级导航，有下来菜单 -->
      <el-submenu index="2">
          <!-- 放置 el-menu-item -->
          <span slot="title">内容管理</span>
          <el-menu-item>发布文章</el-menu-item>
          <el-menu-item>内容列表</el-menu-item>
          <el-menu-item>评论列表</el-menu-item>
          <el-menu-item>素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
          <!-- 放置 el-menu-item -->
          <span slot="title">粉丝管理</span>
          <el-menu-item>图文数据</el-menu-item>
          <el-menu-item>粉丝概况</el-menu-item>
          <el-menu-item>粉丝画像</el-menu-item>
          <el-menu-item>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
          账户信息
      </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .layout-aside{
        width: 231px;
        .title{
            text-align: center;
            background-color: #2f2f32;
            padding: 10px 0;
            img{
                height: 35px
            }
        }
    }
</style>

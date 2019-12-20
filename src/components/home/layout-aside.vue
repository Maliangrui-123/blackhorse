<template>
<div class="layout-aside">
    <div class="title">
        <img src="../../assets/img/logo_admin.png" alt="">
    </div>
    <!-- 放置导航组件 -->
    <!-- :rourer="ture"开启路由  可以简写router -->
  <el-menu router background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">
      <!-- 一级导航，没有下拉菜单 -->
      <!-- index 类似于router-link的to属性，可以执行跳转 -->
      <el-menu-item index="/home">
          首页
      </el-menu-item>
      <!-- 二级导航，有下来菜单 -->
      <el-submenu index="1">
          <!-- 放置 el-menu-item -->
          <span slot="title">内容管理</span>
          <el-menu-item index="/home/publish">发布文章</el-menu-item>
          <el-menu-item index="/home/articles">内容列表</el-menu-item>
          <el-menu-item index="/home/comment">评论列表</el-menu-item>
          <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index="1">
          <!-- 放置 el-menu-item -->
          <span slot="title">粉丝管理</span>
          <el-menu-item index="/home/picture">图文数据</el-menu-item>
          <el-menu-item index="/home/fansinfo">粉丝画像</el-menu-item>
          <el-menu-item index="/home/fanslife">粉丝概况</el-menu-item>
          <el-menu-item index="/home/fanslist">粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="/account">
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

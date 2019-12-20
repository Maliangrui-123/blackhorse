<template>
  <!-- 放置一个外层容器 -->
  <el-container>
    <!-- 左右布局 -->
    <el-aside style="background-color:#353b4e;height:100vh;width:230px;overflow:hidden">
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 再放置一个container -->
    <el-container>
      <!-- 上下布局 -->
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <!-- 主体部分 -->
      <el-main>
        <!-- 二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style>

</style>

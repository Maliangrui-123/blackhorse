<template>
  <!-- 基本页面结构 -->
  <el-card v-loading="loading">
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!-- 放置上传素材 -->
    <el-row type="flex" justify="end">
      <el-upload action="" :http-request="uploadImg" :show-file-list="false">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </el-row>
    <!-- 放置组件素材 -->
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部素材" name="all">
        <!-- 全部素材内容 需要定制一个样式 -->
        <div class="img-list">
          <!-- v-for渲染页面 -->
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <el-row class="operate" type="flex" align="middle" justify="space-around">
              <i class="el-icon-star-on"></i>
              <i class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
        <!-- 分页组件 -->
        <el-row type="flex" justify="center" align="middle" style="height:80px">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="page.total"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            @current-change="changePage"
          ></el-pagination>
        </el-row>
      </el-tab-pane>
      <!-- 收藏素材内容 -->
      <el-tab-pane label="收藏素材" name="collect">
        <div class="img-list">
          <!-- v-for渲染页面 -->
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
          </el-card>
        </div>
        <!-- 分页组件 -->
        <el-row type="flex" justify="center" align="middle" style="height:80px">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="page.total"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            @current-change="changePage"
          ></el-pagination>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      activeName: 'all', // 默认选中
      list: [], // 接收全部数据
      page: {
        currentPage: 1, // 当前页码
        pageSize: 8, // 每页多少条
        total: 0 // 总条数
      }
    }
  },
  methods: {
    //   上传图片
    uploadImg (params) {
      this.loading = true
      let form = new FormData()
      form.append('image', params.file) // 添加文件到formData
      this.$axios({
        method: 'post',
        url: '/user/images',
        data: form
      }).then(result => {
        // 进入到then说明已经上传成功了
        this.loading = false
        this.getAllMaterial()
      })
    },
    // 切换分页事件
    changePage (newPage) {
      this.page.currentPage = newPage // 得到一个最新页码
      this.getAllMaterial()
    },
    // 切换tab栏事件
    changeTab () {
      this.page.currentPage = 1 // 切换的时候重置到第一页
      this.getAllMaterial()
    },
    //   获取所有素材
    getAllMaterial () {
      // 当前的this.activeName === "collect"就查询收藏，
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect',
          page: this.page.currentPage,
          per_page: this.page.pageSize
        }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count // 获取总条数
      })
    }
  },
  created () {
    this.getAllMaterial()
  }
}
</script>

<style lang="less" scoped>
.img-list {
  display: flex;
  flex-wrap: wrap;
  .img-card {
    width: 200px;
    height: 240px;
    margin: 20px 50px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .operate {
      width: 100%;
      height: 30px;
      font-size: 20px;
      position: absolute;
      bottom: 0;
      background-color: #f4f5f6;
      left: 0;
    }
  }
}
</style>

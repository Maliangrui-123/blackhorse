<template>
  <el-card v-loading="loading">
    <!-- 面包屑给了卡片的具名插槽 -->
    <bread-crumb slot="header">
      <!-- 插槽内容 -->
      <template slot="title">评论列表</template>
    </bread-crumb>
    <!-- body内容 -->
    <el-table :data="list">
      <!-- 表格列组件 label 设置表头 -->
      <el-table-column prop="title" width="600" label="标题"></el-table-column>
      <!-- 格式化属性来显示布尔值 -->
      <el-table-column :formatter="formatterBool" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <!-- 放组件  要使用作用域插槽-->
        <template slot-scope="obj">
          <el-button size="small" type="text">修改</el-button>
          <el-button
            @click="openOrClose(obj.row)"
            size="small"
            type="text"
          >{{ obj.row.comment_status ? '关闭评论' : '打开评论' }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center" align="middle" style="height:80px">
      <el-pagination background layout="prev, pager, next" :current-page="page.currentPage" :total="page.total" :page-size="page.pageSize" @current-change="changePage">
    </el-pagination>
    </el-row>

  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      list: [],
      page: {
        // 专门放置分页数据
        total: 0, // 数据总条数
        pageSize: 10,
        currentPage: 1
      }
    }
  },
  methods: {
    // 页码改变事件
    changePage (newPage) {
      // 1.修改当前页码
      this.page.currentPage = newPage
      this.getComment()
    },
    //   请求评论列表数据
    getComment () {
      this.loading = true
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.currentPage, per_page: this.page.pageSize }
      }).then(result => {
        this.loading = false
        this.list = result.data.results // 获取评论列表数据
        this.page.total = result.data.total_count // 获取文章总条数
      })
    },
    // 定义一个布尔值转化方法
    formatterBool (row, column, cellValue, index) {
      // row是当前行数据，column是当前列属性，cellValue是当前单元格值，index是当前下标
      //   formatter必须要有返回值
      return cellValue ? '正常' : '关闭'
    },
    // 打开关闭评论
    openOrClose (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`确定要${mess}评论吗`).then(() => {
        // 用户确定修改
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: {
            article_id: row.id.toString()
          },
          data: {
            allow_comment: !row.comment_status
          }
        }).then(result => {
          // 打开或者关闭评论成功
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.getComment() // 重新请求列表
        })
      })
    }
  },
  created () {
    //   调用上面设置的请求数据方法

    this.getComment()
  }
}
</script>

<style>
</style>

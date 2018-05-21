<template>
    <div>
        <div>
            <el-button type="primary" @click="toAdd">新增</el-button>
        </div>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column type="index" width="80"></el-table-column>
            <el-table-column prop="title" label="标题"  min-width="120">
                <template scope="scope">
                    <el-button type="text" @click="toDetail(scope.row.id)">{{scope.row.title}}</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="createUser" label="创建人"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column prop="state" label="状态" width="100">
                <template scope="scope">
                    <p>{{scope.row.state | convertStateToDescription}}</p>
                </template>
            </el-table-column>
            <el-table-column  label="操作" width="80">
                <template scope="scope">
                    <el-button type="text">{{scope.row.state === 0?'上线':'下线'}}</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getNewsList } from '../../../api/article'
var moment = require('moment')

export default {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.getTableData()
  },
  methods: {
    // 获取列表信息
    getTableData () {
      getNewsList().then(res => {
        console.log(res.content.list)
        this.tableData = res.content.list.map(item => {
          return {
            'id': item._id,
            'title': item.title,
            'content': item.content,
            'createUser': item.createUser,
            'createTime': moment(item.createTime).format('YYYY-MM-DD HH:mm:ss'),
            'state': item.state
          }
        })
      })
    },
    // 跳转到详情页
    toDetail (id) {
      console.log('11111', id)
      this.$router.push({name: '详情页', params: {'id': id}})
    },

    // 跳转到新增页面
    toAdd () {
      this.$router.push({name: '新增'})
    }
  },
  filters: {
    convertStateToDescription (state) {
      return ['未上线', '已上线'][state]
    }
  }

}
</script>

<style scoped>

</style>

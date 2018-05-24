<template>
    <div>
        <div>
            <el-button type="primary" @click="toAdd">新增</el-button>
        </div>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column type="index" width="80"></el-table-column>
            <el-table-column prop="title" label="标题"  min-width="120">
                <template scope="scope">
                    <el-button type="text" @click="toDetail(scope.row._id)">{{scope.row.title}}</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="createUser" label="创建人"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column prop="updateTime" label="更新时间"></el-table-column>
            <el-table-column prop="state" label="状态" width="100">
                <template scope="scope">
                    <p>{{scope.row.state | convertStateToDescription}}</p>
                </template>
            </el-table-column>
            <el-table-column  label="操作" width="150">
                <template scope="scope">
                    <el-button type="text" @click="changeState(scope.row._id,scope.row.state)">{{scope.row.state === 0?'上线':'下线'}}</el-button>
                    <el-button type="text" @click="toEdit(scope.row._id)" v-if="!scope.row.state">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getNewsList, setState} from '../../../api/article'
import moment from 'moment'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.getTableData()
  },
  // computed: {
  //   mapState({
  //     userName:state => state.user.userName
  //   })

  // },
  methods: {
    // 获取列表信息
    getTableData () {
      getNewsList().then(res => {
        this.tableData = res.content.list
        this.tableData.forEach(item => {
          item.createTime = item.createTime ? moment(item.createTime).format('YYYY-MM-DD HH:mm:ss') : '--'
          item.updateTime = item.updateTime ? moment(item.updateTime).format('YYYY-MM-DD HH:mm:ss') : '--'
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
    },

    // 上线或者下线
    changeState (id, state) {
      let info
      let flag = 0
      if (state == 0) flag = 1
      if (state) {
        info = '确认是否要将该条新闻下线？'
      } else {
        info = '确认是否要上线该条新闻？'
      }
      this.$confirm(info, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (id) {
          setState(id, flag).then(data => {
            console.log(data.errorMsg)
            this.$message({
              type: 'success',
              message: data.errorMsg
            })
            this.getTableData({name: '新增'})
          })
        }
      })
    },

    // 编辑
    toEdit (id) {
      console.log(id)
      this.$router.push({name: '编辑', params: {id}})
    }
  },
  filters: {
    convertStateToDescription (index) {
      return ['未上线', '已上线'][index]
    }
  }

}
</script>

<style scoped>

</style>

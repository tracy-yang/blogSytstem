<template>
  <div>
      <table-layout>
        <el-form ref="form" :model="form" label-width="80px" slot="search">     
          <el-row :gutter="41">
            <el-col :span="8">
              <el-form-item label="内容">
                <el-input v-model="form.title"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="创建人">
                <el-input v-model="form.createUser"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="创建时间">
                <el-date-picker v-model="form.createTime" type="date" placeholder="选择创建日期" style="width:100%" format="yyyy-MM-dd"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="41">
            <el-col :span="8" >
              <el-form-item label="状态">
                  <el-select v-model="form.state" placeholder="请选择" style="width:100%">
                    <el-option v-for="item in stateList" :key="item.id" :label="item.label"  :value="item.id" ></el-option>
                  </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-button type="primary"  @click="submit">查询</el-button>
            </el-col>
          </el-row>
        </el-form>

        <div slot="form">
          <el-button type="primary" @click="toAdd">新增</el-button>
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
          <el-pagination  
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="listQuery.page"
            :page-sizes="[10,20,50]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="listQuery.total">
          </el-pagination> 
        </div>
      
      </table-layout>
  </div>
</template>

<script>
import moment from 'moment'
import {mapState} from 'vuex'
import tableLayout from '@/components/tableLayout/index'
import { getNewsList, setState} from '../../../api/article'


export default {
  components:{tableLayout},
  data () {
    return {
      tableData: [],
      form:{
        title:'',
        createUser:'',
        createTime:'',
        state:''
      },
      stateList:[
        {
          id:'',
          label:'全部'
        },
        {
          id:0,
          label:'未上线'
        },
        {
          id:1,
          label:'已上线'
        }
      ],
      listQuery:{
        page:1,
        total:0,
        pageSize:10
      }
    }
  },
  created () {
    this.getTableData()
  },
  // computed: mapState(['layout']),
  methods: {
    // 获取列表信息
    getTableData () {
      console.log(this.form.createTime);
      let start = this.form.createTime?moment('2018-5-18').utc().format('YYYY-MM-DD'):'';
      console.log(start);
      getNewsList(this.listQuery.pageSize,this.listQuery.page,this.form.title,this.form.createUser,start,this.form.state).then(res => {
        this.tableData = res.content.list
        this.tableData.forEach(item => {
          item.createTime = item.createTime ? moment(item.createTime).format('YYYY-MM-DD HH:mm:ss') : '--'
          item.updateTime = item.updateTime ? moment(item.updateTime).format('YYYY-MM-DD HH:mm:ss') : '--'
        })
      })
    },

    // 查询
    submit(){
      console.log(this.layout)
      this.getTableData () ;
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
    },

    //handleSizeChange
    handleSizeChange(val){
      this.listQuery.pageSize = val;
    },

    handleCurrentChange(val){
      this.listQuery.page = val;
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

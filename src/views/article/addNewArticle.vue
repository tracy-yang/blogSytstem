<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <editor @inputInfo="getContent" :content-info="form.content"/>
            </el-form-item>
            <el-form-item >
                <div class="btn-group">
                    <el-button @click = "cancel">返回</el-button>
                    <el-button type="primary" @click="onSubmit" :loading="loading">保存</el-button>
                </div>

            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import editor from '../../components/editor/index'
import moment from 'moment'
import { addNews, getDetailById, editNews} from '@/api/article'

export default {
  components: {editor},
  data () {
    return {
      id: this.$route.params.id,
      form: {
        title: '', // 标题名称
        content: '', // 内容
        createUser: 'test02', // 创建人
        state: 0 // 状态
      },
      loading: false
    }
  },
  created () {
    if (this.id) {
      this.getDetailById()
    }
  },
  watch: {

  },
  methods: {
    // 从富文本编辑器内取数据
    getContent (data) {
      this.form.content = data
    },

    // 根据ID获取新闻的内容
    getDetailById () {
      getDetailById(this.id).then(data => {
        this.form.title = data.content.title
        this.form.content = data.content.content
      })
    },

    // 保存
    onSubmit () {
      this.loading = true
      let now = moment().format('YYYY-MM-DD HH:mm:ss')
      if (this.id) { // 编辑
        editNews(this.id, this.form.title, this.form.content, this.form.createUser, now).then(data => {
          this.loading = false
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.$router.push({name: '文章列表'})
        }).catch(err => {
          this.loading = false
        })
      } else { // 新增
        addNews(this.form.title, this.form.content, this.form.createUser, this.form.state, now).then(data => {
          this.loading = false
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.$router.push({name: '文章列表'})
        }).catch(err => {
          this.loading = false
        })
      }
    },

    // 返回上一级页面
    cancel () {
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>
.btn-group{
    text-align: center;
}
</style>

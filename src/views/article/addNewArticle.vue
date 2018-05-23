<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <editor @inputInfo="getContent"/>
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
import { addNews } from '@/api/article'

export default {
  components: {editor},
  data () {
    return {
      form: {
        title: '', // 标题名称
        content: '' // 内容
      },
      loading: false
    }
  },
  methods: {
    getContent (data) {
      this.form.content = data
      console.log(this.form.content)
    },

    // 保存
    onSubmit () {
      let now = moment().format('YYYY-MM-DD HH:mm:ss')
      let user = 'test02'
      this.loading = true
      addNews(this.form.title, this.form.content, user, 0, now).then(data => {
        this.loading = false
        this.$message({
          type: 'success',
          message: '新增成功'
        })
        this.$router.push({name: '文章列表'})
      }).catch(err => {
        this.loading = false
      })
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

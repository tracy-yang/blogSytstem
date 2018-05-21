<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <editor @input-info="getContent(data)"/>
            </el-form-item>
            <el-form-item >
                <div class="btn-group">
                    <el-button @click = "cancel">返回</el-button>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                </div>

            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import editor from '../../components/editor/index'
export default {
  components: {editor},
  data () {
    return {
      form: {
        title: '', // 标题名称
        content: '' // 内容
      }
    }
  },
  methods: {
    getContent (data) {
      console.log(data)
      this.form.content = data
    },

    // 保存
    onSubmit () {
      console.log(111111111)
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

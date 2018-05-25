<template>
<div class="wrapper">
    <div class="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm" >
            <p class="title">登录</p>
            <el-form-item prop="userName" >
                <el-input v-model.trim="ruleForm.userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item  prop="password">
                <el-input v-model.trim="ruleForm.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <div>
                    <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%" :loading="loading">登陆</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>

</div>
</template>

<script>
import { login } from '@/api/user'
import {mapGetters, mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      ruleForm: {
        userName: '', // 用户名
        passwrod: '' // 密码
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  created () {
    // console.log(this.userName, 2222222)
  },
  //   computed: mapState({
  //     userName: state => state.user.userName
  //   }),
  computed: {
    // ...mapState({
    //   userName: state => state.user.userName
    // }),

    ...mapGetters(['userName'])

  },
  methods: {
    ...mapActions(['set_userName']),

    // 登陆
    submitForm (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.loading = true
          login(this.ruleForm.userName, this.ruleForm.password).then(data => {
            this.loading = false
            this.set_userName(data.content.userName)
            this.$router.push({name: '主页'})
          }).catch(err => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })

    //   console.log(this.userName, 333333333)
    //   console.log()
    //   console.log(this.userName, 344444444)
    }
  }

}
</script>

<style scoped>
.wrapper{
    width:100%;
    height:100%;
    background-image: url('../../assets/bg.jpg');
    background-position: center;
}
.form{
    padding: 24px;
    width:460px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.demo-ruleForm{
    padding:50px;
    background:#fff;
    border-radius: 3px;
}
.title{
    font-size: 22px;
    text-align: center;
    padding-bottom: 30px;
}

</style>

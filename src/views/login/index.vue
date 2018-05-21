<template>
<div class="wrapper">
    <div class="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
            <p class="title">登录</p>
            <el-form-item prop="userName">
                <el-input v-model="ruleForm.userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item  prop="password">
                <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <div>
                    <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">登陆</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        userName: '', // 用户名
        passwrod: '' // 密码
      },
      rules: {

      }
    }
  },
  methods: {
    submitForm () {
      console.log(111111111)
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

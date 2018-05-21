<template>
<div class="app-wrapper">
    <h2 class="title">{{detail.title}}</h2>
    <div class="info">
        <span>作者：{{detail.createUser}}</span>
        <span>创建时间：{{detail.createTime}}</span>
    </div>
    <div class="content" v-html="detail.content"></div>
</div>
</template>

<script>
import { getDetailById } from '@/api/article'
var moment = require('moment')

export default {
  data () {
    return {
      id: this.$route.params.id,
      detail: null
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      getDetailById(this.id).then(data => {
        this.detail = data.content;
        this.detail.createTime = moment(this.detail.createTime).format('YYYY-MM-DD HH:mm:ss');
      })
    }
  }

}
</script>

<style scoped>
.title{
    font-size:18px;
    color:#333;
    text-align: center;
}
.info{
    padding:10px 0;
    text-align: center;
}
.info span:first-of-type{
    margin-right:15px;
}
.content{
    text-indent:35px;
    padding:10px 0 20px 0;
}
.content p{
    line-height: 32px;
    padding: 4px 0;
}
</style>

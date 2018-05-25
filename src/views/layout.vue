<template>
<el-container>
    <el-header>
        <h2>xx官网管理平台</h2>
        <div>
            <div class="img-wrapper" @click="isShow = !isShow">
                <img src="../assets/default.png" alt="">
                <span>{{userName}}</span>
            </div>
            <ul class="subMenu" v-if="isShow">
                <li><a>修改密码</a></li>
                <li><a href="javascript:void(0)"  @click="exit">退出</a></li>
            </ul>
        </div>
    </el-header>
    <el-container>
        <el-aside width="200px">
            <ul>
                <li v-for="(item,index) in routerList" :key="index" class="router-item" v-if="item.path !== '*'  &&  item.path !== '/' && item.path !== '/login'">
                    <router-link :to="item.path" >{{item.name}}</router-link>
                </li>
            </ul>

        </el-aside>
        <el-main>
            <transition>
                <router-view/>
            </transition>
        </el-main>
    </el-container>
</el-container>

</template>

<script>
import router from '../router/index'
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      routerList: [], // 路由列表
      isShow: false // 菜单是否显示
    }
  },
  created () {
    this.showRouter()
  },
  computed: {
    ...mapGetters(['userName'])

  },
  methods: {
    ...mapActions(['logout']),

    // 显示所有路由
    showRouter () {
      this.routerList = router.options.routes
    },

    // 退出
    exit () {
      this.$confirm('是否要退出', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 方法1
        this.logout().then(() => { //
          this.$router.push({name: '登陆'})
        })

        // 方法2
        // this.$store.dispatch('logout').then(() => {
        //   this.$router.push({name: '登陆'})
        // })
      }).catch(() => {

      })
    }
  }

}
</script>

<style scoped>
.el-header, .el-footer {
    background-color: #333;
    color: #999;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
}
.el-header h2{
    text-align: left;
}
.el-header .img-wrapper{
    margin-top:10px;
    cursor: pointer;
}
.el-header .img-wrapper span{
    vertical-align: top;
    color:#fff;
}
.el-header .img-wrapper img{
    width: 40px;
    height:40px;
}

.subMenu{
    position: absolute;
    top: 60px;
    right: 20px;
    z-index: 100;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    background:#333;
}
.subMenu li{
    padding:0 15px;
    border-bottom: #ddd solid 1px;
}
.subMenu li a{
    color:#fff;
}
.el-aside {
    /* background:rgb(43,195,172);
    color:#fff;
    text-align: center;
    line-height: 100px;
    width: 200px;
    position: absolute;
    bottom: 0;
    top: 60px; */
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding-top:20px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
}

.el-aside h2{
    line-height: 70px;
    font-size: 20px;
    border-bottom: #f2f2f2 solid 1px;
}
.el-main {
    background-color: #fff;
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
    position: absolute;
    top: 60px;
    left: 200px;
    right: 0;
    bottom: 0;
}

.router-item  a{
    padding-right: 20px;
    padding-left: 20px;
    position: relative;
    display: block;
    padding: 14px 15px;
    color: #337ab7;
}

.router-item a:hover{
    background-color: #eee;
}
</style>

<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="item.path" v-for="(item,index) in list" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
// import router from '@/router/index'

export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.showRouter()
  },
  watch: {
    $route () {
      this.showRouter()
    }
  },
  methods: {
    // 显示所有路由
    showRouter () {
      this.list = this.$route.matched
      this.list.filter(item => {
        return item.name
      })
      //   console.log(this.$route.matched, routerList, 2222)
      const first = this.list[0]
      const second = this.list[1]
      if (first && (first.name !== '首页' || first.path !== '')) {
        if (second) {
          if (first.name === second.name) {
            this.list.shift()
          }
        }
        // routerList = [{ name: home.name || '首页', path: '/' }].concat(routerList)
      }
    }
  }
}
</script>

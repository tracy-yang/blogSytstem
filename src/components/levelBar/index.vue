<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="item.path" v-for="(item,index) in routerList" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
import router from '@/router/index';

export default {
    data(){
        return {
            routerList:[]
        }
    },
    created(){
        this.showRouter();
    },
    methods:{
        // 显示所有路由
        showRouter(){
            console.log(router.options.routes,this.$route)
            this.routerList = router.options.routes;

        }
    }
}
</script>


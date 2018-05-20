<template>
<div class="app-wrapper">
    <h2 class="title">hahahahhaha</h2>
    <p class="content">222222222222222222</p>

</div>   
</template>

<script>
import {getDetailById} from '@/api/article';
export default {
    data(){
        return {
            id : this.$route.params.id
        }
    },
    created(){
        console.log(this.$route.params.id);
    },
    methods:{
        // getDetail(){
        //     console.log(this.$route.params.id);
        //     getDetailById().then(data =>{
        //         console.log(data);
        //     })
        // }
    }
    
}
</script>

<style scoped>
.title{
    font-size:18px;
    color:#333;
    text-align: center;
}
.content{
    text-indent:35px;
    padding:10px 0 20px 0;
}
</style>



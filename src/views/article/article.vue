<template>
<div>
   <level-bar/>
    <article-list />
</div>
</template>

<script>
import articleList from './comps/articleList' // 列表页
import levelBar from '@/components/levelBar/index'

export default {
  components: {levelBar, articleList}

}
</script>

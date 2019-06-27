<template>
    <div class="articleIndex">
        <h1>Articles Page</h1>
        <ArticleList></ArticleList>
    </div>
</template>

<script>
import ArticleList from '~/pages/articles/components/articleList.vue'
export default {
    components: {
        ArticleList
    },
}
</script>


<style scoped>
.articleIndex {
    background: linear-gradient(#fbfbfb, #fbfbfb);
}
</style>

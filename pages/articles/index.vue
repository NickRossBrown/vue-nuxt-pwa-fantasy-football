<template>
    <div class="articleIndex">
        <PageHero></PageHero>
        <h1>Articles Page</h1>
        <ArticleList></ArticleList>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
import ArticleList from '~/pages/articles/components/articleList.vue'
import PageHero from '~/components/pageHero.vue';
import PageFooter from '~/components/pageFooter.vue';

export default {
    components: {
        ArticleList,
        PageHero,
        PageFooter,
    },
}
</script>


<style scoped>
.articleIndex {
    background: linear-gradient(#fbfbfb, #fbfbfb);
}
</style>

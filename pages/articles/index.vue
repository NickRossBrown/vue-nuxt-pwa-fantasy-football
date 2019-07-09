<template>
    <div class="articleIndex">
        <PageHero :style="{backgroundImage: `url(${require('../../assets/banners/article-1.png')})`}">League Articles</PageHero>
        <ArticleList></ArticleList>
        <PageFooter :style="{backgroundImage: `url(${require('../../assets/banners/article-1.png')})`}"></PageFooter>
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

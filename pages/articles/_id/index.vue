<template>
    <div class="article-page">
        <PageHero class="mb5"></PageHero>
        <b-row>
            <b-col cols="12" md="8" offset-md="2">
                <b-card border-variant="light" class="content-card">
                    <b-card-title class="text-center">{{ current_article.title }}</b-card-title>
                    <b-card-text v-for="(text,index) in current_article.content" 
                    :key="index"
                    :index="index" >
                        <span v-html="text.value"></span>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
import PageHero from '~/components/pageHero.vue';
import PageFooter from '~/components/pageFooter.vue';
import { mapGetters } from 'vuex';

export default {
    props: {},
    data() {
        return {
            current_article: {},
        };
    },
    components: {
        PageHero,
        PageFooter,
    },
    computed: {
        getArticle() {
            let articles_index = $store.state.articles
        },
        ...mapGetters([
            'getArticleById',
        ]),
    },
    mounted() {
        let article_index = this.$store.getters.getArticles
        let article_id = Number(this.$route.params.id)
        let test2 = article_index.filter((article) => article.id == this.$route.params.id)
        let test3 = article_index.filter((article) => article.id == 11)
        this.current_article = this.$store.getters.getArticleById(article_id)
        // this.current_article = this.current_article[0] 
    },
    methods: {},
};
</script>

<style scoped>

.content-card {
    background: #fff;
}
.article-page {
    background: rgb(250, 250, 250);
}
</style>

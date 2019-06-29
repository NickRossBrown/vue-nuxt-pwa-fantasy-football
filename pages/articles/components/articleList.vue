<template>
    <div class="mx-5">
        <b-row class="pl-3">
            <h2>Example articles list</h2>
        </b-row>
        <div
            v-for="(article, index) in articles"
            :key="index"
        >
            <ArticleItem
                :article="article"
            ></ArticleItem>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ArticleItem from '~/pages/articles/components/articleItem.vue';

export default {
    components: {
        ArticleItem
    },
    computed: {
        ...mapState({
            articles: 'article_index'
        })
    }
}
</script>
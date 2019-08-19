import axios from 'axios';

export const state = () => ({
    article_index: [],
    article_show: {},
    podcast_index: [],
    member_index: [],
})

const getters = {
    getArticles(state) {
        return state.article_index
    },
    getArticleById: (state) => (id) => {
        const article = state.article_index.filter((article) => article.id == id)
        return article[0]
    },
    getPodcasts(state) {
        return state.podcast_index
    },
    getMembers(state){
        return state.member_index
    }
};

const mutations = {
    setArticleIndex(state, articles) {
        state.article_index = articles
    },
    setArticleShow(state, payload) {
        const articleObject = state.article_index.find(
            x => x.article_id == payload
        );
        return state.pageArticle = articleObject
    },
    setPodcastIndex(state, payload) {
        state.podcast_index = payload
    },
    setMemberIndex(state, payload) {
        state.member_index = payload
    },
}

const actions = {
    async nuxtServerInit({ dispatch }, { query }) {
        await dispatch('loadData')
    },
    async loadData({ dispatch }) {
        return Promise.all([
            dispatch('articlesApiCall'),
            dispatch('podcastsApiCall'),
            dispatch('membersApiCall')
        ])
    },
    async membersApiCall(vuexContext, context) {
        await axios
            .get(
                'https://callyourmoms-api.herokuapp.com/api/v2/pages/?type=callyourmoms.MemberDetailPage&fields=*'
            )
            .then(res => {
                const loadedMembers = res.data.items || []
                vuexContext.commit('setMemberIndex', loadedMembers)
            })
            .catch(e => context.error(e))
    },
    async podcastsApiCall(vuexContext, context) {
        await axios
            .get(
                'https://callyourmoms-api.herokuapp.com/api/v2/pages/?type=callyourmoms.PodcastDetailPage&fields=*'
            )
            .then(res => {
                const loadedPodcasts = res.data.items || []
                vuexContext.commit('setPodcastIndex', loadedPodcasts)
            })
            .catch(e => context.error(e))
    },
    async articlesApiCall(vuexContext, context) {
        await axios
            .get('https://callyourmoms-api.herokuapp.com/api/v2/pages/?type=callyourmoms.ArticleDetailPage&fields=*'
            )
            .then(res => {
                let articlesArray = res.data.items || []
                vuexContext.commit('setArticleIndex', articlesArray)
            })
            .catch(e => context.error(e))
    },
    loadArticleById(vuexContext, payload) {
        vuexContext.commit('setArticleIndex', payload)
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}


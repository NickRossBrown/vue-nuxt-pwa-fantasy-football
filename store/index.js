import axios from 'axios';

const state = {
    article_index: [],
    article_show: {},
    podcast_index: [],
    member_index: [],
}

const getters = {
    getArticles(state) {
        return state.article_index
    },
    getArticle(state) {
        return state.article_show
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
                'https://django-cms-api.herokuapp.com/api/v2/pages/?type=callyourmoms.MemberDetailPage&fields=*'
            )
            .then(res => {
                // console.log(res.data.items)
                const loadedMembers = res.data.items || []
                vuexContext.commit('setMemberIndex', loadedMembers)
            })
            .catch(e => context.error(e))
    },
    async podcastsApiCall(vuexContext, context) {
        await axios
            .get(
                'https://django-cms-api.herokuapp.com/api/v2/pages/?type=callyourmoms.PodcastDetailPage&fields=*'
            )
            .then(res => {
                // console.log(res.data.items)
                const loadedPodcasts = res.data.items || []
                vuexContext.commit('setPodcastIndex', loadedPodcasts)
            })
            .catch(e => context.error(e))
    },
    async articlesApiCall(vuexContext, context) {
        await axios
            .get('https://django-cms-api.herokuapp.com/api/v2/pages/?type=callyourmoms.ArticleDetailPage&fields=*'
            )
            .then(res => {
                console.log(res.data.items)
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


<template>
    <section class="podcast-page">
        <PageHero :style="{backgroundImage: `url(${require('../../assets/banners/podcast-1.png')})`}">Fantasy Podcasts</PageHero>
        <PodcastList ></PodcastList>
        <PageFooter :style="{backgroundImage: `url(${require('../../assets/banners/podcast-1.png')})`}"></PageFooter>
    </section>
</template>

<script>
import PodcastList from '~/pages/podcasts/components/podcastList.vue'
import PageHero from '~/components/pageHero.vue';
import PageFooter from '~/components/pageFooter.vue';
export default {
    components: {
        PodcastList,
        PageHero,
        PageFooter,
    },
}
</script>

<style scoped>
.podcast-page{
    background: rgb(245, 245, 245)
}
</style>

<template>
    <section class="podcast-page">
        <PageHero>Fantasy Podcasts</PageHero>
        <PodcastList ></PodcastList>
        <PageFooter></PageFooter>
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

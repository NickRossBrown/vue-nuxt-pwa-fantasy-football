<template>
    <div >
        <PageHero>Fantasy Podcasts</PageHero>
        <PodcastList ></PodcastList>
        <PageFooter></PageFooter>
    </div>
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

</style>

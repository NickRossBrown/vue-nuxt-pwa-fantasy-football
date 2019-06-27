<template>
    <div class="mx-5">
        <b-row class="mx-auto">
            <h2 class="mx-auto">Example podcast list</h2>
        </b-row>
        <div
            v-for="(podcast, index) in podcasts"
            :key="index"
            class="d-flex justify-content-center mb-3"
        >
            <podcastItem
                :podcast="podcast"
            ></podcastItem>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PodcastItem from '~/pages/podcasts/components/podcastItem.vue';

export default {
    components: {
        PodcastItem
    },
    computed: {
        ...mapState({
            podcasts: 'podcast_index'
        })
    }
}
</script>
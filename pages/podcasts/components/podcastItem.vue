<template>
    <div>
        <b-card
            :title="podcast.title"
            :img-src="podcast.thumbnail_image.meta.download_url"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="podcast_item"
        >
            <b-card-text>
                Some quick text to build on the card title and make up the bulk of the card's content.Some quick text to build on the card title and make up the bulk of the card's content.
                {{ podcast.description }}
            </b-card-text>
            <b-card-group>
                <audio :src="audio_link" controls crossorigin="anonymous"></audio>
            </b-card-group>
        </b-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            audio_link: '',
            img_link: '',
        }
    },
    props: {
        podcast: {
            type: Object,
            default: function () {
                return { 
                    title: 'hello',
                    thumbail_image: 'thumb',
                    }
            }
        }
    },
    mounted() {
        let s3AudioLink ='https://wagtail-django-api.s3-us-west-2.amazonaws.com/media/documents/'
        s3AudioLink += this.podcast.podcast_file.title
        this.audio_link = s3AudioLink
    },
    computed: {

    }
}
</script>
<style scoped>

.podcast_item {
  transform: translateY(0);
  box-shadow: 0 0 0 rgba(93, 93, 93, 0.16);
  background: linear-gradient(#fbfbfb, #fbfbfb);
  transition: all 0.3s ease;
  color: black;
  text-decoration: none;
}
.podcast_item:active, .podcast_item:focus, .podcast_item:hover {
  transform: translateY(-3px);
  border-color: transparent;
  box-shadow: 0 1px 6px rgba(93, 93, 93, 0.16);
  background: #f5fffd;
  color: rgb(68, 68, 68);
}
</style>



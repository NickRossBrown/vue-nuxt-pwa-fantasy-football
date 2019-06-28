<template>
    <div>
        <b-card no-body class="overflow-hidden mt-1 list_item" @click="loadMember">
            <b-row no-gutters align-v="center">
            <b-col cols="12" md="2" class="m-2">
                <b-card-img-lazy
                    :src="article.thumbnail_image.meta.download_url" 
                    v-bind="imgProps"
                    blank-color="rgba(128, 255, 255, 0.5)"
                    style="max-width: 10rem; max-height: 10rem;"
                    align="center"
                ></b-card-img-lazy
                >
            </b-col>
            <b-col md="9">
                <b-card-body :title="article.title">
                <b-card-text>
                    {{ article.thumbnail_description }}
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                </b-card-text>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
export default {
    data() {
      return {
        imgProps: { blank: true, width: 275, height: 275, class: 'm1' }
      }
    },
    props: {
        article: {
            type: Object,
            required: true,
        }
    },
    methods: {
		loadMember() {
			this.$router.push('/articles/'+ this.article.id)
		}
	}
}
</script>

<style scoped>

.list_item {
  transform: translateY(0);
  box-shadow: 0 0 0 rgba(93, 93, 93, 0.16);
  background: #fff;
  transition: all 0.3s ease;
  color: black;
}
.list_item:active, .list_item:focus, .list_item:hover {
  transform: translateY(-3px);
  border-color: transparent;
  box-shadow: 0 1px 6px rgba(93, 93, 93, 0.16);
  background: linear-gradient(90deg, #2fe0c5, #3bdcc4, #2fe0c5);
  color: #fff;
}
</style>

<template>
    <b-row class="memberRow"  align-v="center" :class="[alternate == 'true' ? 'alternate-theme' : '']">
        <b-col cols="12" md="4" offset-md="2" class="ml-md-auto">
            <b-card
                no-body
                style="max-width: 20rem;"
                :img-src="member.profile_image.meta.download_url"
                img-alt="Image"
                img-top
                align="center"
                class="fixSkew"
            >
                <b-list-group flush >
                    <b-list-group-item :class="[alternate == 'true' ? 'alternate-theme-content' : '']">Best Finish: {{ member.bestfinnish }}</b-list-group-item>
                    <b-list-group-item :class="[alternate == 'true' ? 'alternate-theme-content' : '']">Weekly Win: {{ member.weekly_win_total }}</b-list-group-item>
                    <b-list-group-item :class="[alternate == 'true' ? 'alternate-theme-content' : '']">Playoffs made: {{ member.playoffs_made }}</b-list-group-item>
                </b-list-group>
            </b-card>
        </b-col>
        <b-col cols="12" md="8">
            <b-card :title="member.name" class="fixSkew" :class="[alternate == 'true' ? 'alternate-theme-content' : '']">
                <b-card-text v-for="(text,index) in member.content" 
                :key="index"
                :index="index" >
                    <span v-html="text.value"></span>
                    <p>{{ member.profile_image.meta.download_url }}</p>
                </b-card-text>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        member: {
            type: Object,
            required: true,
        },
        alternate: {
            type: Boolean,
            default: false,
        }
    },
}
</script>

<style scoped>
.fixSkew {
    transform: skewY(-3deg)
}
.memberRow {
    padding-top: 100px;
    padding-bottom: 100px;
    background-color:  rgb(187, 187, 187);
    transform: skewY(3deg)
}
.card {
    margin: 0 auto;
    float: none; 
}
.alternate-theme {
    background: rgb(252, 252, 252);
}
.alternate-theme-content {
    background: rgb(187, 187, 187);
}
</style>

<template>

        <!-- <b-row align-v="center" >
            <b-col align-v="center" class="bg-info ">

                 <b-img center src="https://picsum.photos/225/225/?image=58" alt="Center image"></b-img>
            </b-col>
            <b-col class="bg-warning"> col 2</b-col>
        </b-row> -->
        <!-- <b-row class="h-100 bg-info"></b-row> -->
        <b-row class="memberRow"  align-v="center" >
            <b-col  cols="12" md="6" offset-md="2" class="ml-md-auto">
                <b-card
                    no-body
                    style="max-width: 20rem;"
                    img-src="https://placekitten.com/275/275"
                    img-alt="Image"
                    img-top
                    align="center"
                >
                    <b-list-group flush>
                        <b-list-group-item>Best Finish: {{ member.bestfinnish }}</b-list-group-item>
                        <b-list-group-item>Weekly Win: {{ member.weekly_win_total }}</b-list-group-item>
                        <b-list-group-item>Playoffs made: {{ member.playoffs_made }}</b-list-group-item>
                    </b-list-group>
                </b-card>
            </b-col>
            <b-col cols="12" md="6">
                
                <h2>{{member.name}} </h2>
                <div
                    v-for="(text,index) in member.content" 
                    :key="index"
                    :index="index" 
                >
                    <p v-html="text.value"></p>

                </div>
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
    }
}
</script>

<style scoped>
.memberRow {
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: rgb(233, 233, 233);
}
.card {
        margin: 0 auto; /* Added */
        float: none; /* Added */
}
</style>

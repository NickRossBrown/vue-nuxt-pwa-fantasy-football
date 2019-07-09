<template>
  <div>
    <PageHero :style="{backgroundImage: `url(${require('../assets/banners/football-2.png')})`}">Home</PageHero>
    <b-row> 
      <b-col cols="12"  class="ml-md-auto text-center">
        <h2>Call Your Moms</h2>
        <p>Every Sunday, she loves you</p>
      </b-col>
    </b-row>
    <b-row class="home-news-title">
      <b-col cols="12" class="text-center ">
        <h2>League News</h2>
      </b-col>
    </b-row>

    <b-row class="home-news">
      <b-col cols="12" md="3" offset-md="2" class="bottom-border alternate-bg">
        <h4>Vote on a conference call date</h4>
      </b-col>
      <b-col cols="12" md="5" class="bottom-border alternate-bg-dark">
        <p>*Get on slack and vote on potential dates.</p>
      </b-col>
    </b-row>
    <b-row class="home-news">
      <b-col cols="12" md="3" offset-md="2" class="alternate-bg">
        <h4>Complain to the commish</h4>
      </b-col>
      <b-col cols="12" md="5" class="alternate-bg-dark">
        <p>*Don't forget to complain to the commish about something he can't control.</p>
      </b-col>
    </b-row>
    <b-row class="pt-5 pb-5">
      <b-col cols="12" md="6" class="p-0 alternate-bg">
        <h3 class="text-center">NFL Season Countdown</h3>
        <no-ssr>
          <flip-countdown class="countdown" deadline="2019-9-5 17:20:00"></flip-countdown>
        </no-ssr>
      </b-col>
      <b-col cols="12" md="6" class=" p-0 alternate-bg-dark">
        <h3 class="text-center">League Conference Call Countdown (TBD)</h3>
        <no-ssr>
          <flip-countdown class="countdown" deadline="2018-9-5 17:20:00"></flip-countdown>
        </no-ssr>
      </b-col>
    </b-row>
      
    
    <PageFooter :style="{backgroundImage: `url(${require('../assets/banners/football-2.png')})`}"></PageFooter>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import PageHero from '~/components/pageHero.vue';
import PageFooter from '~/components/pageFooter.vue';
import FlipCountdown from 'vue2-flip-countdown'

export default {
  components: {
    Logo,
    PageHero,
    PageFooter,
    FlipCountdown,
  }
}
</script>

<style>
.alternate-bg {
  background: rgb(230, 230, 230);
}
.alternate-bg-dark {
  background: rgb(187, 187, 187);
}
.home-news {
  background-color: white;
  height: 100px;
}
.bottom-border {
  border-bottom: 5px solid rgb(201, 201, 201);
}
.home-news-title {
  background-color: white;
  height: 100px;
  margin-top: 25px;
}


</style>

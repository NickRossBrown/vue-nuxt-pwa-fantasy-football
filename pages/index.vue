<template>
  <div>
    <PageHero :style="{backgroundImage: `url(${require('../assets/banners/football-2.png')})`}"></PageHero>
      <h2 class="text-center">Draft Countdown</h2>
      <no-ssr>
        <flip-countdown class="countdown" deadline="2019-9-3 00:00:00"></flip-countdown>
      </no-ssr>
      <b-row>

        <b-col cols="6" md="4" class="bg-info">
          <p>1st</p>
        </b-col>
        <b-col cols="6" md="8" class="bg-primary">
          <p>2nd col</p>
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


</style>

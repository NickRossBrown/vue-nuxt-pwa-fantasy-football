<template>
  <div>
    <PageHero :style="{backgroundImage: `url(${require('../../assets/banners/stats-2.jpg')})`}">Stats</PageHero>
    <section class="container">
     
    </section>
    <PageFooter :style="{backgroundImage: `url(${require('../../assets/banners/stats-2.jpg')})`}"></PageFooter>
  </div>
</template>

<script>
import PageHero from '~/components/pageHero.vue';
import PageFooter from '~/components/pageFooter.vue';

export default {
  components: {
    PageHero,
    PageFooter,
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

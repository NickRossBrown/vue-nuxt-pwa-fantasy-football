<template>
  <div>
    <PageHero>Stats</PageHero>
    <section class="container">
     
    </section>
    <PageFooter></PageFooter>
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

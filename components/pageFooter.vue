<template>
<div>
    <section class="page-footber">
        <div class="page-footer">
            <slot />
        </div>
    </section>
</div>
  
</template>

<script>
export default {
    
}
</script>

<style scoped>

.page-footber {
    height: 25vh;
    background-size: cover;
    background-image: linear-gradient( to right bottom, rgba(126, 213, 111, .3), rgba(40,180, 131, 0.3)), url(../assets/images/hero-foobtall.jpg);
    background-position: bottom;
    clip-path: polygon(67% 0, 100% 13%, 100% 100%, 0 100%, 0 13%);
    margin-top: 20px
}


</style>

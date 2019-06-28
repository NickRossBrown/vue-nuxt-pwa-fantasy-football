<template>
<div>
    <section
        class="page-footber"

    >
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
    height: 55vh;
    background-size: cover;
    background-image: linear-gradient( to right bottom, rgba(126, 213, 111, .3), rgba(40,180, 131, 0.3)), url(../assets/images/hero-foobtall.jpg);
    background-position: top;
    clip-path: polygon(67% 0, 100% 13%, 100% 100%, 0 100%, 0 13%);
}

.hero-heading {
    color: #fff;
    text-transform: capitalize;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

}
.hero-heading-primary {
    display: block;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 35px;
}

.hero-heading-sub {
    display: block;
    font-size: 20px;
    font-weight: 400;
}


</style>

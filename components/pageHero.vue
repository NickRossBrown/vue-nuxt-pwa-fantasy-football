<template>
<div>
    <div class="hero-main">

    </div>
    <section
        class="page-hero"

    >
    <h1 class="hero-heading">
        <span class="hero-heading-main">Call Your Moms</span>
        <span class="hero-heading-sub">Fantasy Football </span>
        <slot />
    </h1>

    </section>
</div>
  
</template>

<script>
export default {
    
}
</script>

<style scoped>

.page-hero {
    height: 85vh;
    background-size: cover;
    background-image: linear-gradient( to right bottom, rgba(126, 213, 111, .3), rgba(40,180, 131, 0.3)), url(../assets/images/hero-foobtall.jpg);
    background-position: top;
    clip-path: polygon(33% 100%, 100% 87%, 100% 0, 0 0, 0 87%);
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
/* .page-hero::before {
    background-color: #22a3ae!important;
}
.page-hero::after {
    background-color: #6a6a6a!important;
} */

.site-footer::after, .site-footer::before {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 12vw;
    z-index: 2;
    -webkit-transform: scale(-1);
    transform: scale(-1);
}

/* .hero-main {
    height: 50vh;
    background-color: aquamarine;
} */
</style>

<template>
<div class="page-hero">
    <section >
        <h1 class="hero-heading">
            <slot />
        </h1>
    </section>
</div>
  
</template>

<script>
export default {
    props: {
        bannerImg: {
            type: String,
            default: '../assets/banners/members.jpg',
        }
    }
    
}
</script>

<style scoped>

.hero-heading {
    color: #fff;
    text-transform: capitalize;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
@media screen and (min-width: 480px) {
    .page-hero {
        height: 35vh;
        background-size: cover;
        background-image: linear-gradient( to right bottom, rgba(126, 213, 111, .3), rgba(40,180, 131, 0.3)), url(../assets/banners/default-1.jpg);
        background-position: bottom;
        clip-path: polygon(33% 100%, 100% 87%, 100% 0, 0 0, 0 87%);
        margin-bottom: 20px;
    }
}

@media screen and (max-width: 480px) {
    .page-hero {
        height: 20vh;
        background-size: cover;
        background-image: linear-gradient( to right bottom, rgba(126, 213, 111, .3), rgba(40,180, 131, 0.3)), url(../assets/banners/default-1.jpg);
        background-position: bottom;
        clip-path: polygon(33% 100%, 100% 87%, 100% 0, 0 0, 0 87%);
        margin-bottom: 20px;
    }   
}

</style>

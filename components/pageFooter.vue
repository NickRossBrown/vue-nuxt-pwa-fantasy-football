<template>
<div class="page-footer">
    <section>
        <div >
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

@media screen and (min-width: 480px) {
    .page-footer {
        height: 35vh;
        background-size: cover;
        background-image: linear-gradient( to right bottom, rgba(126, 213, 111, .3), rgba(40,180, 131, 0.3)), url(../assets/banners/members.jpg);
        background-position: top;
        clip-path: polygon(67% 0, 100% 13%, 100% 100%, 0 100%, 0 13%);
        margin-top: 20px
    }
}

@media screen and (max-width: 480px) {
    .page-footer {
        height: 15vh;
        background-size: cover;
        background-image: linear-gradient( to right bottom, rgba(126, 213, 111, .3), rgba(40,180, 131, 0.3)), url(../assets/banners/members.jpg);
        background-position: top;
        clip-path: polygon(67% 0, 100% 13%, 100% 100%, 0 100%, 0 13%);
        margin-top: 20px
    }
}






</style>

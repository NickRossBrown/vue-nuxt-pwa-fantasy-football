<template>
    <b-navbar toggleable="lg" type="dark bg-dark" variant="info">
        <b-navbar-brand href="#">Call Your Moms</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-navbar-brand href="/">Home</b-navbar-brand>
            <b-navbar-brand href="/members">Members</b-navbar-brand>
            <b-navbar-brand href="/stats">Stats</b-navbar-brand>            
            <b-navbar-brand href="/articles">Articles</b-navbar-brand>
            <b-navbar-brand href="/podcasts">Podcasts</b-navbar-brand>
        </b-navbar-nav>

        <!-- Nav search tags -->
        <!-- <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
        </b-navbar-nav> -->
        </b-collapse>
    </b-navbar>
</template>


<script>
export default {
    
}
</script>
template
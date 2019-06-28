<template>
    <div>
        <PageHero></PageHero>
        <h1>Member Page</h1>
        <div
        v-for="(person,index) in members" 
        :key="index"
		:index="index" 
        >
            <MemberSection
            :member="person"
            ></MemberSection>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
import MemberSection from '~/pages/members/components/MemberSection.vue';
import PageHero from '~/components/pageHero.vue';
import PageFooter from '~/components/pageFooter.vue';
import { mapState } from 'vuex';

export default {
    components: {
        MemberSection,
        PageHero,
        PageFooter,
    },
    computed: {
        ...mapState({
            members: 'member_index'
        })
    }
}
</script>
<template>
    <div>
        <PageHero :style="{backgroundImage: `url(${require('../../assets/banners/members.jpg')})`}" >League Members</PageHero>
        <div
        v-for="(person,index) in members" 
        :key="index"
		:index="index" 
        >
            <MemberSection
            :member="person"
            :class="[index % 2 === 0 ? 'alternate-theme' : 'normal-theme']"
            :alternate="[index % 2 === 0 ? true : false]"
            >
            </MemberSection>
        </div>
        <PageFooter :style="{backgroundImage: `url(${require('../../assets/banners/members.jpg')})`}"></PageFooter>
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
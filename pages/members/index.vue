<template>
    <div>
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
    </div>
</template>

<script>
import MemberSection from '~/pages/members/components/MemberSection.vue';
import { mapState } from 'vuex';

export default {
    components: {
        MemberSection
    },
    computed: {
        ...mapState({
            members: 'member_index'
        })
    }
}
</script>
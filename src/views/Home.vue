<template>
  <div class="home">
    <ResumeContainer />
    <div class="home-header">
      <button class="btn-logout" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import {firebase} from '../firebase'

import ResumeContainer from "../components/ResumeContainer/ResumeContainer.vue";
export default {
  name: 'home',
  components: {
    ResumeContainer
  },
  methods: {    
    logout: function() {
      this.$store.dispatch('SignOutAction')
    }
  },
  created() {
    if(firebase.auth().currentUser == null) {
      this.$router.replace('login')
      return;
    }
      
    const uid = firebase.auth().currentUser.uid
    
    this.$store.commit("SET_USER", uid)
  },
}
</script>
<style>
  .home-header{
    padding: 20px;
    text-align: right;
  }
</style>

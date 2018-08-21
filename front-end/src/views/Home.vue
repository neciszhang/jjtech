<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <head></head>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
        <v-layout>
          <!-- {{ $vuetify.t('$vuetify.test') }} -->
        </v-layout>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>

import Head from '../components/Head.vue'
export default {
  name: "home",
  data() {
    return {};
  },
  components:{
    Head
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

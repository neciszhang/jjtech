<template>
  <v-content fluid>
    <head-common/>
    <v-layout class="banner blue">
      <h1 v-html="$vuetify.t('$vuetify.home.banner')"></h1>
      <v-btn class="arrow" icon slot="activator" dark>
        <v-icon v-text="$vuetify.icons.arrowDown"></v-icon>
      </v-btn>
    </v-layout>
    <v-layout id="howWeDoIt">
      <h2 v-text="$vuetify.t('$vuetify.home.title1')"></h2>
      <h3 v-html="$vuetify.t('$vuetify.home.desc1')"></h3>
    </v-layout>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
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
  </v-content>
</template>

<script>
import HeadCommon from "../components/Head.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    HeadCommon
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  height: 722px;
  position: relative;
  h1 {
    color: #fff;
    left: calc(50% - 315px);
    margin: auto;
    position: absolute;
    top: calc(50% - 70px);
    width: 630px;
  }
  .arrow{
    bottom: 9%;
    position: absolute;
    left: calc(50% - 30px);
    cursor: pointer;
    animation-name: k;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
}
</style>

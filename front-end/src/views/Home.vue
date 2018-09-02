<template>
  <v-content fluid class="homepage">
    <head-common v-bind:isSticky="false"/>
    <v-layout class="banner">
      <video alt="" autoplay="true" loop="true" muted="true" playsinline="true"  webkit-playsinline="true" width="100%">
        <source src="/videos/proximity_headshots-optimised.mp4">
      </video>
      <h1 v-html="$vuetify.t('$vuetify.home.banner')"></h1>
      <v-btn class="arrow" icon slot="activator" dark>
        <v-icon v-text="$vuetify.icons.arrowDown"></v-icon>
      </v-btn>
    </v-layout>
    <v-layout column align-center id="howWeDoIt" class="wrapper home--section1">
      <h2 v-text="$vuetify.t('$vuetify.home.title1')"></h2>
      <h3 v-html="$vuetify.t('$vuetify.home.desc1')"></h3>
      <article class="card">
        <img src="media/hwd_banner.jpg" alt="">
        <div>
          <p v-html="$vuetify.t('$vuetify.home.descMore')"></p>
        </div>
      </article>
    </v-layout>
    <v-layout row align-center wrap class="wrapper home--section2" justify-space-between>
      <v-flex xs12 class="text-center">
        <img src="media/pencil-2-v2-cropped.gif" alt="">
      </v-flex>
      <v-flex xs12>
         <h2 cloumn v-text="$vuetify.t('$vuetify.home.title2')"></h2>
      </v-flex>
      <v-flex xs6 class="minicard">
        
          <a href="/作品/相信小的伟大-首次冬奥广告战役" data-layer-event="info-click" data-layer-category="event_informational_action" data-layer-action="event_find_out_more" data-layer-label="/作品/相信小的伟大-首次冬奥广告战役">
            <img src="media/alibaba-olympic_display426x426.jpg" alt="">
            <div>
                <h5 v-text="$vuetify.t('$vuetify.home.work1Title')"></h5>
                <span class="cta-home-case-study" v-text="$vuetify.t('$vuetify.home.findOut')"></span>
            </div>
          </a>
      </v-flex>
      <v-flex xs6 class="minicard">
          <a href="/作品/相信小的伟大-首次冬奥广告战役" data-layer-event="info-click" data-layer-category="event_informational_action" data-layer-action="event_find_out_more" data-layer-label="/作品/相信小的伟大-首次冬奥广告战役">
            <img src="media/alibaba-olympic_display426x426.jpg" alt="">
            <div>
                <h5 v-text="$vuetify.t('$vuetify.home.work2Title')"></h5>
                <span class="cta-home-case-study" v-text="$vuetify.t('$vuetify.home.findOut')"></span>
            </div>
          </a>
      </v-flex>
      <v-flex xs12 class="text-center simple--link">
        <a class="hover--red"  href="#/work" v-text="$vuetify.t('$vuetify.home.workMore')"></a>
      </v-flex>
    </v-layout>
    <!-- <v-slide-y-transition mode="out-in">
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
          
        </v-layout>
      </v-layout>
    </v-slide-y-transition> -->
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
.banner{
  height: 722px;
  display: block;
}
.homepage {
  h2,h3{
    font-weight: 700;
  }
  .banner {
    height: auto;
    position: relative;
    video {
      width: 100%;
      object-fit: cover;
    }
    h1 {
      color: #fff;
      left: calc(50% - 315px);
      margin: auto;
      position: absolute;
      top: calc(50% - 70px);
      width: 630px;
    }
    .arrow {
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
  .home--section1 {
    margin-top: 80px;
    text-align: center;
  }
  .card img {
    text-align: center;
    width: 100%;
  }
  .card > div {
    margin-top: -18%;
    min-height: 260px;
    padding: 60px 80px 55px;
    p {
      font-size: 26px;
      line-height: 36px;
      margin: 0;
    }
  }
  .home--section2 h2 {
    margin-bottom: 20px;
  }
  .flex.xs6 {
    flex-basis: 49%;
    box-sizing: border-box;
  }
  .minicard {
    position: relative;
    overflow: hidden;
    a {
      display: inline-block;
      width: 100%;
    }
    img {
      width: 100%;
    }
    img {
      height: 300px;
      object-fit: cover;
    }
    div {
      background-color: rgba(0, 0, 0, 0.4);
      top: 0;
      height: calc(100% - 6px);
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0 40px 40px;
      bottom: 0;
      color: #fff;
      padding: 40px;
      position: absolute;
    }
    h5 {
      color: #fff;
      max-width: 280px;
    }
    .cta-home-case-study {
      text-decoration: underline;
    }
    .cta-home-case-study:hover {
      color: #e30613;
    }
  }
  .simple--link {
    font-family: Avenir Book;
    font-size: 16px;
    line-height: 36px;
    margin: 55px 0;
    a {
      color: #3b2143;
      text-decoration: underline;
      &:hover {
        color: #e30613;
      }
    }
  }
}
.card > div {
  background-color: #fafafa;
  margin: auto;
  margin: -120px 6% 0;
  padding: 50px 90px;
  position: relative;
  text-align: center;
}
</style>

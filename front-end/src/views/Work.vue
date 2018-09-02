<template>
  <div class="work">
    <head-common v-bind:activeMenu="2"></head-common>
    <v-container fluid class="main">
       <section class="workpage--casestudies">
            <p></p><p v-text="$vuetify.t('$vuetify.work.title')"></p><p></p>
            <ul class="myScrollToElement">
                <!-- {{$vuetify.t('$vuetify.work.lists')}} -->
                    <li v-for="item in this.$vuetify.lang.locales[this.$vuetify.lang.current].work.lists">
                        <article class="minicard">
                            <img :src="item.src" alt="">
                            <div>
                                <h4 v-text="item.title"></h4>
                                <h5 v-text="item.desc"></h5>
                            </div>
                        </article>
                    </li>
                    <!-- <li>
                        <article class="minicard">
                            <img src="/media/alibaba-olympic_display426x426-big.jpg" alt="">
                            <div>
                                <h4>阿里巴巴</h4>
                                <h5>“相信小的伟大”首次冬奥广告战役</h5>
                            </div>
                        </article>
                    </li>
                    <li>
                        <article class="minicard">
                            <img src="/media/alibaba-olympic_display426x426-big.jpg" alt="">
                            <div>
                                <h4>阿里巴巴</h4>
                                <h5>“相信小的伟大”首次冬奥广告战役</h5>
                            </div>
                        </article>
                    </li>
                    <li>
                        <article class="minicard">
                            <img src="/media/alibaba-olympic_display426x426-big.jpg" alt="">
                            <div>
                                <h4>阿里巴巴</h4>
                                <h5>“相信小的伟大”首次冬奥广告战役</h5>
                            </div>
                        </article>
                    </li>
                    <li>
                        <article class="minicard">
                            <img src="/media/alibaba-olympic_display426x426-big.jpg" alt="">
                            <div>
                                <h4>阿里巴巴</h4>
                                <h5>“相信小的伟大”首次冬奥广告战役</h5>
                            </div>
                        </article>
                    </li>
                    <li>
                        <article class="minicard">
                            <img src="/media/alibaba-olympic_display426x426-big.jpg" alt="">
                            <div>
                                <h4>阿里巴巴</h4>
                                <h5>“相信小的伟大”首次冬奥广告战役</h5>
                            </div>
                        </article>
                    </li>                  -->
            </ul>
        </section>
    </v-container>
  </div>
</template>
<script>
import HeadCommon from "../components/Head.vue";
export default {
  name: "work",
  mounted() {
    //   console.log(this.$vuetify.lang.locales[this.$vuetify.lang.current].work.lists);
    //   console.log(this.$vuetify.t(this.$vuetify.work.lists));
  },
  data() {
    return {};
  },
  components: {
    HeadCommon
  }
};
</script>
<style lang="scss" scoped>
.work {
  overflow: hidden;
  .workpage--casestudies {
    margin: auto;
    padding-top: 50px;
  }
  p {
    padding: 0 6%;
    width: 472px;
    animation-name: n;
    animation-duration: 1s;
  }
  .workpage--casestudies ul {
    display: flex;
  }
  .workpage--casestudies ul {
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px -8px -1px;
    li {
      width: 33%;
      border: 1px solid #fff;
      display: none;
      cursor: pointer;
      img:hover{
          opacity: .5;
      }
      .minicard {
        height: auto;
        position: relative;
        padding-bottom: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          transition: 1s;
        }
        div {
          background-color: rgba(0, 0, 0, 0.4);
          bottom: 0;
          left: 0;
          height: 25%;
          padding: 30px 30px 4em;
          right: 0;
          position: absolute;
          color: #fff;
        }
      }
    }
    h4 {
      margin: 5px 0 20px;
      text-transform: uppercase;
    }
    h5 {
      color: #fff;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 75%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    }
  }
  .myScrollToElement li:nth-child(-n + 9) {
    display: list-item;
  }
}
</style>


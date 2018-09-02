<template>
  <div class="people-careers">
    <head-common v-bind:activeMenu="4"></head-common>
    <v-container fluid class="main">
       
    </v-container>
  </div>
</template>
<script>
import HeadCommon from "../components/Head.vue";
export default {
  name: "people-careers",
  data() {
    return {};
  },
  components: {
    HeadCommon
  }
};
</script>
<style lang="scss" scoped>
.about {
  overflow: hidden;
  .cardlocal {
    margin: auto;
    position: relative;
  }
  .main {
    margin-top: 126px;
    padding: 0;
  }
  .image--sizes-figures {
    display: block;
    position: relative;
    margin: 0;
  }
  .card div {
    padding: 60px 20px;
  }
  .card img {
    width: 100%;
  }
  .card > div {
    background-color: #fafafa;
    margin: auto;
    margin: -120px 6% 0;
    padding: 50px 90px;
    position: relative;
    text-align: center;
  }
  .image--sizes-figures img,
  .image--sizes-figures video {
    top: 0;
    left: 0;
    position: absolute !important;
  }
  .about--cardlocal {
    margin-top: 50px;
  }
  .cardlocal img,
  .cardlocal img,
  .cardlocal video {
    height: auto;
    object-fit: cover;
    width: 65%;
  }
  .cardlocal--base {
    margin-bottom: 80px;
    margin-top: -28em;
    float: right;
    position: relative;
    text-align: center;
    transition: 1s;
    width: 100%;
  }
  .cardlocal--base__text {
    color: #fff;
    float: right;
    padding: 50px 3.5%;
    text-align: center;
    width: 32%;
  }
  .cardlocal--base__text h3 {
    text-align: center;
  }
  .cardlocal--base__text h3,
  .cardlocal--base__text p {
    color: #fff;
  }
  .cardlocal--base__text p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 10;
  }

  .aboutlocal--clients {
    margin: 90px auto 0;
  }
  .about--clientspartners {
    margin: auto;
    padding: 60px 90px 0;
    text-align: center;
    width: 75%;
    h3 {
      color: #e30613;
    }
    p {
      margin: auto;
      max-width: 75%;
    }
    .about--clients__list {
      padding: 10px 0 40px;
      figure {
        display: inline-block;
        margin: 15px auto;
        width: 24%;
        img {
          max-width: 120px;
        }
      }
      a {
        display: block;
        min-height: 87px;
      }
      img {
        max-height: 160px;
        height: auto;
      }
    }
  }
  .icons_tools_figures img {
    min-height: 80px;
  }
}
</style>


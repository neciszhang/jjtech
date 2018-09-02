<template>
  <header class="global-header" v-bind:class="{ sticky: isSticky }">
      <a class="logo" href="#/">
          <img class="main-logo" src="https://www.proximity.cn/media/1011/prox_primary_rw.png" alt="">
      </a>
      <nav class="nav-standard">
          <ul>
              <li><a href="#/about" v-bind:class="{active:activeMenu=='1'}">{{ $vuetify.t('$vuetify.menu.about') }}</a></li>
              <li><a href="#/work" v-bind:class="{active:activeMenu=='2'}">{{ $vuetify.t('$vuetify.menu.work') }}</a></li>
              <li><a href="#/latest" v-bind:class="{active:activeMenu=='3'}">{{ $vuetify.t('$vuetify.menu.latest') }}</a></li>
              <li><a href="#/people-careers" v-bind:class="{active:activeMenu=='4'}">{{ $vuetify.t('$vuetify.menu.peopleCareers') }}</a></li>
              <li><a href="#/contact" v-bind:class="{active:activeMenu=='5'}">{{ $vuetify.t('$vuetify.menu.contact') }}</a></li>
              <li>
                <v-menu transition="slide-x-transition" bottom right class="local-language">
                  <v-btn icon slot="activator" class="deep-orange" color="accent" dark>
                      <v-icon v-text="$vuetify.icons.globe"></v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile v-for="(item, i) in items" :key="i" @click="changeLocales(item)">
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </li>
          </ul>
      </nav>


  </header>
</template>
<script>
export default {
  name: "headCommon",
  data: () => ({
    items: [
      { title: "ZH", language: "zh" },
      { title: "EN", language: "en" },
      { title: "Japan", language: "japan" }
    ]
  }),
  props: {
    isSticky: {
      type:Boolean,
      default:true
    },
    activeMenu:{
      type:Number
    }
  },
  methods: {
    changeLocales(item) {
      this.$vuetify.lang.current = item.language;
    }
  }
};
</script>

<style lang="scss">
.global-header {
  padding: 40px 6% 10px calc(6% - 5px);
  margin: 0 auto;
  padding: 40px 6%;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  color: #fff;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  position: fixed;
  &.sticky {
    // position: fixed;
    background: #fafafa;
    .nav-standard a:hover {
      color: #e30613 !important;
    }
    .nav-standard a {
      // color: #fff;
      color: rgb(59, 33, 67);
      transition: all 0.5s ease;
    }
  }
  .logo {
    overflow: hidden;
    width: 50px;
    height: auto;
    background-position: -6.5px -2px;
    background-repeat: no-repeat;
    background-size: 290%;
    img {
      display: block !important;
      bottom: 0;
      max-width: 18em;
      width: auto;
      height: 46.5px;
    }
  }
  .nav-standard {
    display: flex;
    align-items: center;
    a:hover {
      color: #3b2143 !important;
    }
    a.active {
      font-weight: 700;
    }
    a {
      color: #fff;
      // color: rgb(59, 33, 67);
      transition: all 0.5s ease;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0 0 5px;
      margin-bottom: -12px;
    }
    ul {
      display: flex;
      align-items: center;
    }
    ul {
      margin-right: 31px;
    }
    ul li {
      margin-left: 25px;
    }
  }

  .local-language {
    position: absolute;
    right: 0;
    text-align: center;
    top: 43px;
    width: 7%;
    z-index: 2;
  }
}
</style>

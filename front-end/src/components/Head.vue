<template>
  <header class="global-header blue">
      <a class="logo" href="/">
          <!-- <img class="main-logo" src="https://www.proximity.cn/media/1011/prox_primary_rw.png" alt=""> -->
      </a>
      <nav class="nav-standard">
          <ul>
              <li><a href="">{{ $vuetify.t('$vuetify.menu.about') }}</a></li>
              <li><a href="">{{ $vuetify.t('$vuetify.menu.work') }}</a></li>
              <li><a href="">{{ $vuetify.t('$vuetify.menu.latest') }}</a></li>
              <li><a href="">{{ $vuetify.t('$vuetify.menu.peopleCareers') }}</a></li>
              <li><a href="">{{ $vuetify.t('$vuetify.menu.contact') }}</a></li>
          </ul>
      </nav>

      <v-menu transition="slide-x-transition" bottom right>
        <v-btn icon slot="activator"
          class="deep-orange"
          color="accent"
          dark>
            <v-icon v-text="$vuetify.icons.globe"></v-icon>
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            @click="callback"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>


  </header>
</template>
<script>
export default {
  name: "headCommon",
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  }),
  methods: {
    callback() {}
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
  // z-index: 2;
  color: #fff;
  top: 0;
  left: 0;
  right: 0;
  &.sticky {
    position: fixed;
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
    a {
      color: #fff;
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
}
</style>

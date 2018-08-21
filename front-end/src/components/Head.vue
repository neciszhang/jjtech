<template>
    <!-- <v-container fluid> -->
        <header class="global-header sticky">
            <a class="logo" href="/">
                <img class="main-logo" src="https://www.proximity.cn/media/1011/prox_primary_rw.png" alt="">
            </a>
            <nav class="nav-standard">
                <ul>
                    <li>{{ $vuetify.t('$vuetify.menu.about') }}</li>
                    <li>{{ $vuetify.t('$vuetify.menu.work') }}</li>
                    <li>{{ $vuetify.t('$vuetify.menu.latest') }}</li>
                    <li>{{ $vuetify.t('$vuetify.menu.peopleCareers') }}</li>
                    <li>{{ $vuetify.t('$vuetify.menu.contact') }}</li>
                </ul>
            </nav>
        </header>
    <!-- </v-container> -->
</template>
<script>
export default {
  name: "head"
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
  position: absolute;
  z-index: 2;
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

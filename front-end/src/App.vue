<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-text="miniVariant ? icon1 : icon2"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon v-text="icon1"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon v-text="icon2"></v-icon>
      </v-btn>
      <!-- <v-toolbar-title v-text="title"></v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon v-text="icon3"></v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-btn icon>
              <v-icon v-text="icon4"></v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "$vuetify.icons.menu",
          title: "Inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      // title: 'Vuetify.js',
      icon1: "$vuetify.icons.expand",
      icon2: "$vuetify.icons.edit",
      icon3: "$vuetify.icons.menu",
      icon4: "$vuetify.icons.cancel"
    };
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
a {
  line-height: 22px;
  color: #3b2143;
}
ul li {
    list-style: none;
}
html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
}
</style>


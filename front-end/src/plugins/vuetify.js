import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VMenu,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'
import MY_ICONS from '../config/icons'
import zh from '../locale/zh'
import en from '../locale/en'

Vue.use(Vuetify, {
  components: {
    VApp,
    VMenu,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  iconfont: 'fa',
  icons: MY_ICONS,
  lang:{
    locales: { zh, en },
    current: 'zh'
  },
  rtl: false
});
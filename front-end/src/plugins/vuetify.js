import '@fortawesome/fontawesome-free/css/all.css'
import VueI18n from 'vue-i18n'
import Vue from 'vue'
import {
  Vuetify,
  VApp,
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
import messages from '../locale/message'
Vue.use(VueI18n);
console.log(messages);

const i18n = new VueI18n({
  locale: 'zh-CN', // set locale
  messages, // set locale messages
})

Vue.use(Vuetify, {
  components: {
    VApp,
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
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  },
  rtl: false
});
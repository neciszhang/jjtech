import VueI18n from 'vue-i18n'
import Vue from 'vue'
Vue.use(VueI18n)
const messages = {
  en: {
    $vuetify: {
      dataIterator: {
        rowsPerPageText: 'Items per page:',
        pageText: '{0}-{1} of {2}'
      }
    },
  },
  sv: {
    $vuetify: {
      dataIterator: {
        rowsPerPageText: 'Element per sida:',
        pageText: '{0}-{1} av {2}'
      }
    },
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'sv', // set locale
  messages, // set locale messages
})
Vue.use(Vuetify, {
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
})
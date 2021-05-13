import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from 'vue-lang-router'

// plugin to change algolia colors according docs theme
import AlgoliaColorPlugin from './components/sidebar/algolia-search/algolia-color-plugin'
import { VuesticPlugin } from 'vuestic-ui/src/main'
import { VuesticConfig } from './config/vuestic-config'
import { useGtag } from './services/gtag'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(AlgoliaColorPlugin)
app.use(VuesticPlugin, VuesticConfig)

useGtag(app, router)

app.mount('#app')

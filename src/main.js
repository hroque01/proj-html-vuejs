import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeadset, faFolder, faMessage } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'

library.add(faHeadset, faFolder, faMessage)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

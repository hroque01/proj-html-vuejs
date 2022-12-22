import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeadset, faFolder, faMessage, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'

library.add(faHeadset, faFolder, faMessage, faChevronDown)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

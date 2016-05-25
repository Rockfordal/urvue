import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import router from './routes'
import App from './App'

sync(store, router)

router.start(App, '#app')

import { createStore } from 'vuex'
import journalStore from '../modules/dayBook/store/journal'

export default createStore({
  modules: {
    journal: journalStore
  }
})

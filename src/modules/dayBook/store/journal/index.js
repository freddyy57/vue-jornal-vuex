import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import state from './state'

const journalStore = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default journalStore

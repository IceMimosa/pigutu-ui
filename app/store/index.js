export const state = () => ({
  urls: []
})

export const mutations = {
  getData (state, urls) {
    state.urls = urls
  }
}

export const actions = {
  // async nuxtServerInit ({ dispatch }) {
  //   await dispatch('')
  // },
  async getData ({ commit }) {
    const urls = await this.$axios.$get('/api/pigutu/test')
    commit('getData', urls)
  }
}

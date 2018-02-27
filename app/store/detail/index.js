export const state = () => ({
  detailData: []
})

export const mutations = {
  getDetails (state, detailData) {
    state.detailData = detailData
  }
}

export const actions = {
  // async nuxtServerInit ({ dispatch }) {
  //   await dispatch('')
  // },
  async getDetails ({ commit }) {
    const detailData = await this.$axios.$get('/api/detail/100')
    console.log(detailData)
    commit('getDetails', detailData)
  }
}

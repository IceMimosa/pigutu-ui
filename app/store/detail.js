export const state = () => ({
  detailData: []
})

export const mutations = {
  getDetails (state, detailData) {
    state.detailData = detailData
  }
}

export const actions = {
  async getDetails ({ commit }, { id }) {
    const detailData = await this.$axios.$get(`/api/detail/${id}`)
    commit('getDetails', detailData)
  }
}

export const state = () => ({
  detailData: [],
  recommendData: []
})

export const mutations = {
  getDetails (state, detailData) {
    state.detailData = detailData
  },
  randomRecommend (state, recommendData) {
    state.detailData.recommends = recommendData
  }
}

export const actions = {
  async getDetails ({ commit }, { id }) {
    const detailData = await this.$axios.$get(`/api/detail/${id}`)
    commit('getDetails', detailData)
  },
  async randomRecommend ({ commit }) {
    const recommendData = await this.$axios.$get(`/api/randomRecommend`)
    commit('randomRecommend', recommendData)
  }
}

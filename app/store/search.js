export const state = () => ({
  imageListData: []
})

export const mutations = {
  getSearchImg (state, imageListData) {
    state.imageListData = imageListData
  }
}

export const actions = {
  async getSearchImg ({ commit }, { key, pageNo }) {
    key = encodeURI(key)
    const imageListData = await this.$axios.$get(
      `/api/search/?key=${key}&pageNo=${pageNo}`
    )
    commit('getSearchImg', imageListData)
  }
}

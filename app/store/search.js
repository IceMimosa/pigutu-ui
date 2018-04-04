export const state = () => ({
  imageListData: []
})

export const mutations = {
  getSearchImg (state, imageListData) {
    state.imageListData = imageListData
  },
  addLikeCount (state, {index, likeCount}) {
    state.imageListData.data[index].likeCount = likeCount
  }
}

export const actions = {
  async getSearchImg ({ commit }, { key, pageNo }) {
    key = encodeURI(key)
    const imageListData = await this.$axios.$get(
      `/api/search/?key=${key}&pageNo=${pageNo}`
    )
    commit('getSearchImg', imageListData)
  },
  async addLikeCount ({ commit }, { index, id }) {
    const likeCount = await this.$axios.$get(`/api/like?id=${encodeURI(id)}`)
    commit('addLikeCount', {index, likeCount})
  }
}

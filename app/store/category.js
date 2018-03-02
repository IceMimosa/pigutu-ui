export const state = () => ({
  imageListData: []
})

export const mutations = {
  getCategory (state, imageListData) {
    state.imageListData = imageListData
  },
  addLikeCount (state, {index, likeCount}) {
    state.imageListData.data[index].likeCount = likeCount
  }
}

export const actions = {
  async getCategory ({ commit }, { id, pageNo }) {
    id = encodeURI(id)
    const imageListData = await this.$axios.$get(`/api/category/${id}?pageNo=${pageNo}`)
    commit('getCategory', imageListData)
  },
  async addLikeCount ({ commit }, { index, id }) {
    const likeCount = await this.$axios.$get(`/api/like?id=${encodeURI(id)}`)
    commit('addLikeCount', {index, likeCount})
  }
}

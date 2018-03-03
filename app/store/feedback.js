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
  async submitFeedback ({ commit }, { id, pageNo }) {
    id = encodeURI(id)
    const imageListData = await this.$axios.$get(`/api/category/${id}?pageNo=${pageNo}`)
    commit('getCategory', imageListData)
  }
}

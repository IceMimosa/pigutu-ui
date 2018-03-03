export const state = () => ({
  id: '',
  pageNo: 1,
  imageListData: []
})

export const mutations = {
  getCategory (state, { imageListData, id, pageNo }) {
    state.imageListData = imageListData
    state.id = id
    state.pageNo = pageNo
  },
  addLikeCount (state, {index, likeCount}) {
    state.imageListData.data[index].likeCount = likeCount
  }
}

export const actions = {
  async getCategory ({ commit }, { id, pageNo }) {
    id = encodeURI(id)
    const imageListData = await this.$axios.$get(`/api/category/${id}?pageNo=${pageNo}`)
    commit('getCategory', { imageListData, id, pageNo })
  },
  async addLikeCount ({ commit }, { index, id }) {
    const likeCount = await this.$axios.$get(`/api/like?id=${encodeURI(id)}`)
    commit('addLikeCount', {index, likeCount})
  }
}

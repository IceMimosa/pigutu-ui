export const state = () => ({
  imageListData: [],
  likeCount: []
})

export const mutations = {
  getCategory (state, imageListData) {
    state.imageListData = imageListData
  },
  addLikeCount (state, imageListData) {
    state.imageListData = imageListData
  }
}

export const actions = {
  async getCategory ({ commit }, { id, pageNo }) {
    id = encodeURI(id)
    const imageListData = await this.$axios.$get(`/api/category/${id}?pageNo=${pageNo}`)
    console.log('---sss------' + pageNo + `/api/category/${id}?pageNo=${pageNo}`)
    commit('getCategory', imageListData)
  },
  async addLikeCount ({ commit }, { id }) {
    alert(id)
    id = encodeURI(id)
    const likeCount = await this.$axios.$get(`/api/like?id=${id}`)
    alert(likeCount)
    commit('addLikeCount', likeCount)
  }
}

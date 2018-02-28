export const state = () => ({
  imageListData: []
})

export const mutations = {
  getCategory (state, imageListData) {
    state.imageListData = imageListData
  }
}

export const actions = {
  async getCategory ({ commit }, { id, pageNo }) {
    const imageListData = await this.$axios.$get(`/api/category/${id}?pageNo=${pageNo}`)
    console.log('---sss------' + pageNo + `/api/category/${id}?pageNo=${pageNo}`)
    commit('getCategory', imageListData)
  }
}

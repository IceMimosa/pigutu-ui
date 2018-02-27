export const state = () => ({
  imageListData: []
})

export const mutations = {
  getCategory (state, imageListData) {
    state.imageListData = imageListData
  }
}

export const actions = {
  async getCategory ({ commit }) {
    const imageListData = await this.$axios.$get('/api/category/1/1')
    console.log(imageListData)
    commit('getCategory', imageListData)
  }
}

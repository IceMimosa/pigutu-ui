export const state = () => ({
  updateImg: []
})

export const mutations = {
  getUpdateImg (state, updateImg) {
    state.updateImg = updateImg
  }
}

export const actions = {
  async getUpdateImg ({ commit }, { pageNo }) {
    const updateImg = await this.$axios.$get(`/api/updateImg?pageNo=${pageNo}`)
    console.log('aaaaaaaaaaaa' + updateImg.data[0].title)
    commit('getUpdateImg', updateImg)
  }
}

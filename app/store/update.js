export const state = () => ({
  updateImg: []
})

export const mutations = {
  getUpdateImg (state, updateImg) {
    state.updateImg = updateImg
  },
  addLikeCount (state, {index, likeCount}) {
    state.updateImg.data[index].likeCount = likeCount
  }
}

export const actions = {
  async getUpdateImg ({ commit }, { pageNo }) {
    const updateImg = await this.$axios.$get(`/api/updateImg?pageNo=${pageNo}`)
    console.log('aaaaaaaaaaaa' + updateImg.data[0].title)
    commit('getUpdateImg', updateImg)
  },
  async addLikeCount ({ commit }, { index, id }) {
    const likeCount = await this.$axios.$get(`/api/like?id=${encodeURI(id)}`)
    commit('addLikeCount', {index, likeCount})
  }
}

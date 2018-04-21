export const state = () => ({
  detailData: {},
  recommendData: [],
  showData: []
})

export const mutations = {
  getDetails (state, detailData) {
    state.detailData = detailData
    state.showData = detailData.details
  },
  randomRecommend (state, recommendData) {
    state.detailData.recommends = recommendData
  },
  addLikeCount (state, likeCount) {
    state.detailData.imageDetail.likeCount = likeCount
  }
}

export const actions = {
  async getDetails ({ commit }, { id }) {
    const detailData = await this.$axios.$get(`/api/detail/${id}`)
    commit('getDetails', detailData)
  },
  async randomRecommend ({ commit }) {
    const recommendData = await this.$axios.$get(`/api/randomRecommend`)
    commit('randomRecommend', recommendData)
  },
  async addLikeCount ({ commit }, { id }) {
    const likeCount = await this.$axios.$get(`/api/like?id=${id}`)
    commit('addLikeCount', likeCount)
  },
  async addComment ({ commit }, { imageId, commentContent }) {
    let params = new URLSearchParams()
    params.append('fromUser', '游客')
    params.append('imageId', imageId)
    params.append('content', commentContent)
    const likeCount = await this.$axios.$post(`/api/postComment`, params)
    commit('addLikeCount', likeCount)
  }
}

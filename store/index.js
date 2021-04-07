export const state = () => ({
  pageData: null
})

export const mutations = {
  pageData(state, data) {
    state.pageData = data
  }
}

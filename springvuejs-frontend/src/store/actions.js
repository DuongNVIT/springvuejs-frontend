export default {
    increateCount(state) {
        state.commit('setCount', state.count)
    }
}
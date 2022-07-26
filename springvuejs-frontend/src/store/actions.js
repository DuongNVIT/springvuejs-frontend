export default {
    setIsAuthenticated({commit}, isAuthenticated) {
        commit("setIsAuthenticated", isAuthenticated)
    },
    setUsername({commit}, username) {
        commit("setUsername", username)
    },
    setUserid({commit}, userid) {
        commit("setUserid", userid)
    }
}
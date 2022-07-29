export default {
    setIsAuthenticated({commit}, isAuthenticated) {
        console.log("setIsAuthenticated to: " + isAuthenticated)
        commit("setIsAuthenticated", isAuthenticated)
    },
    setUsername({commit}, username) {
        commit("setUsername", username)
    },
    setUserid({commit}, userid) {
        commit("setUserid", userid)
    },
    setRole({commit}, role) {
        commit("setRole", role)
    }
}
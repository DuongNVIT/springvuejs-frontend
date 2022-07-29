export default {
    setIsAuthenticated(state, isAuthenticated) {
        console.log("setIsAuthenticated to: " + isAuthenticated)
        state.isAuthenticated = isAuthenticated;
    },
    setUsername(state, username) {
        state.username = username;
    },
    setUserid(state, userid) {
        state.userid = userid;
    },
    setRole(state, role) {
        state.role = role;
    }
}
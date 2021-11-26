import UserService from '@/services/user'

export default {
    namespaced: true,
    state: {
        user: null,
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        logout(state) {
            state.user = null;
            localStorage.clear()
        }
    },
    actions: {
        loginHandler({
            commit
        }, body) {
            return new Promise((resolve, reject) => {
                UserService.login(body.email, body.password)
                    .then((resp) => {
                        const [user] = resp.data;
                        commit('setUser', user)
                        resolve(true)
                    })
                    .catch(() => reject(false));
            })
        }
    },
    getters: {
        _getUser: (state) => state.user
    }
}
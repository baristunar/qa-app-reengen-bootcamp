
export default {
    namespaced: true,
    state: {
        isLoading: false,
    },
    mutations: {
        setLoading(state, payload) {
            state.isLoading = payload;
        },
      
    },
    getters: {
        _isLoading: (state) => state.isLoading
    }
}
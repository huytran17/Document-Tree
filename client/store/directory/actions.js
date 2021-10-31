const { CONFIG } = require('../../config/app')

export const actions = {
    async fetchDirectories({ commit }) {
        await this.$axios
            .$get(`${CONFIG.BASE_URL}/api/directories/list`)
            .then((res) => {
                commit('reloadDirectories', res.data)
            });
    }
}
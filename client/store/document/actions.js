const { CONFIG } = require('../../config/app')

export default {
    async fetchDocuments({ commit }) {
        await this.$axios.$get((`${CONFIG.BASE_URL}/api/documents/list`)
            .then((res) => {
                commit('reloadDocuments', res.data)
            }))
    }
}
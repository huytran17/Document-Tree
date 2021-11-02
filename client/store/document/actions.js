const { CONFIG } = require('../../config/app')

export default {
    async fetchDocuments({ commit }) {
        await this.$axios
            .$get(`${CONFIG.BASE_URL}/api/documents/list`)
            .then((res) => {
                commit('refreshDocuments', res.data)
            });
    },

    getRootNodes({ commit }) {
        commit('getRootNodes')
    },

    createDocumentTree({ state, dispatch, commit }, payload) {
        if (payload.documentsTree.length === 0) return null;

        payload.documentsTree.forEach((parentDocument, k) => {
            commit('initialChildrenDocument', parentDocument)

            for (var i = 0; i < payload.documents.length; i++) {
                if (payload.documents[i].documentId === payload.documentsTree[k].id) {
                    commit('addChildrenDocument', { parentDocument, childDocument: payload.documents[i] })
                    commit('spliceDocuments', i)
                    --i;
                }
            }

            return dispatch('createDocumentTree',
                {
                    documentsTree: payload.documentsTree[k].children,
                    documents: state.documents
                });
        });
    },

    async getFromDirectory({ commit, dispatch, state }, directoryId) {
        await this.$axios
            .$get(`${CONFIG.BASE_URL}/api/directories/documents`, {
                params: {
                    directoryId: directoryId
                },
            })
            .then(async (res) => {
                commit('refreshDocuments', res)
                dispatch('getRootNodes')
                dispatch('createDocumentTree', {
                    documentsTree: state.documentsTree,
                    documents: state.documents,
                })
            });
    }
}
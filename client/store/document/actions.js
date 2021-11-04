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

    setChecked({ commit }, payload) {
        commit('setChecked', payload)
    },

    setIsUpdate({ commit }, payload) {
        commit('setIsUpdate', payload)
    },

    setIsView({ commit }, payload) {
        commit('setIsView', payload)
    },

    async getDocumentTree({ commit, dispatch, state }, payload) {
        commit('refreshDocuments', payload)
        dispatch('getRootNodes')
        dispatch('createDocumentTree', {
            documentsTree: state.documentsTree,
            documents: state.documents,
        })
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

    async getFromDirectory({ dispatch }, directoryId) {
        await this.$axios
            .$get(`${CONFIG.BASE_URL}/api/directories/documents`, {
                params: {
                    directoryId: directoryId
                },
            })
            .then(async (res) => {
                await dispatch('getDocumentTree', res)
            });
    },

    async createDocument({ dispatch }, payload) {
        await this.$axios
            .$post(`${CONFIG.BASE_URL}/api/documents/create`, {
                label: payload.label || "Tài liệu mới",
                documentId: payload.parentId,
                directoryId: payload.directoryId
            }).then(res => {
                dispatch('setChecked', res.data)
            })
    }
    ,
    async updateDocument({ dispatch }, payload) {
        await this.$axios
            .$post(
                `${CONFIG.BASE_URL}/api/documents/update`,
                {
                    label: payload.label || "Tài liệu mới",
                    content: payload.content,
                    directoryId: payload.directoryId
                },
                {
                    params: {
                        id: payload.id,
                    },
                }
            )
            .then(async (res) => {
                // await dispatch('getDocumentTree', res)
            });
    }
}
const { CONFIG } = require('../../config/app')

export default {
    async fetchDirectories({ commit }) {
        await this.$axios
            .$get(`${CONFIG.BASE_URL}/api/directories/list`)
            .then((res) => {
                commit('refreshDirectories', res.data)
            });
    },

    getRootNodes({ commit }) {
        commit('getRootNodes')
    },

    setChecked({ commit }, payload) {
        commit('setChecked', payload)
    },

    async getDirectoryTree({ commit, dispatch, state }) {
        await dispatch('fetchDirectories')
        commit('getRootNodes')
        dispatch('createDirectoryTree', {
            directoriesTree: state.directoriesTree,
            directories: state.directories
        })
    },

    createDirectoryTree({ state, dispatch, commit }, payload) {
        if (payload.directoriesTree.length === 0) return null;

        payload.directoriesTree.forEach((parentDirectory, k) => {
            commit('initialChildrenDirectory', parentDirectory)

            for (var i = 0; i < payload.directories.length; i++) {
                if (payload.directories[i].directoryId === payload.directoriesTree[k].id) {
                    commit('addChildrenDirectory', { parentDirectory, childDirectory: payload.directories[i] })
                    commit('spliceDirectories', i)
                    --i;
                }
            }

            return dispatch('createDirectoryTree',
                {
                    directoriesTree: payload.directoriesTree[k].children,
                    directories: state.directories
                });
        });
    },

    async createDirectory({ dispatch }, payload) {
        await this.$axios
            .$post(`${CONFIG.BASE_URL}/api/directories/create`, {
                label: payload.label || "Thư mục mới",
            })
            .then(async () => {
                await dispatch('getDirectoryTree')
            });
    },

    async createSubDirectory({ dispatch }, payload) {
        await this.$axios
            .$post(`${CONFIG.BASE_URL}/api/directories/create`, {
                label: payload.label || "Thư mục mới",
                directoryId: payload.parentId,
            })
            .then(async () => {
                await dispatch('getDirectoryTree')
            });
    }
    ,
    async updateDirectory({ dispatch }, payload) {
        await this.$axios
            .$post(
                `${CONFIG.BASE_URL}/api/directories/update`,
                {
                    label: payload.label || "Thư mục mới",
                },
                {
                    params: {
                        id: payload.id,
                    },
                }
            )
            .then(async () => {
                await dispatch('getDirectoryTree')
            });
    },

    async removeDirectory({ dispatch }, payload) {
        await this.$axios
            .$post(`${CONFIG.BASE_URL}/api/directories/remove`, null, {
                params: {
                    id: payload.id,
                },
            })
            .then(async () => {
                await dispatch('getDirectoryTree')
            });
    }
}
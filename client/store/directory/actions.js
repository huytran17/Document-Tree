const { CONFIG } = require('../../config/app')

export default {
    async fetchDirectories({ commit }) {
        await this.$axios
            .$get(`${CONFIG.BASE_URL}/api/directories/list`)
            .then((res) => {
                commit('reloadDirectories', res.data)
            });
    },

    getRootNodes({ commit }) {
        commit('getRootNodes')
    },
    //TODO: 
    createDirectoryTree({ state, dispatch }) {
        var { directoriesTree, directories } = state

        if (directoriesTree.length === 0) return null;

        directoriesTree.forEach((parentDirectory) => {
            parentDirectory.children = [];

            for (var i = 0; i < directories.length; i++) {
                if (directories[i].directoryId === parentDirectory.id) {
                    parentDirectory.children.push(directories[i]);
                    directories.splice(i, 1);
                    --i;
                }
            }

            return dispatch('createDirectoryTree');
        });
    }
}
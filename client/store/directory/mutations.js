export default {
    refreshDirectories(state, directories) {
        refreshData(state);
        state.directories = directories
    },

    getRootNodes(state) {
        for (var i = 0; i < state.directories.length; i++) {
            if (!state.directories[i].directoryId) {
                state.directoriesTree.push(state.directories[i]);
                state.directories.splice(i, 1);
                --i;
            }
        }
    },

    initialChildrenDirectory(state, parentDirectory) {
        parentDirectory.children = []
    },

    addChildrenDirectory(state, payload) {
        payload.parentDirectory.children.push(payload.childDirectory)
    },

    spliceDirectories(state, position) {
        state.directories.splice(position, 1)
    },

    setChecked(state, payload) {
        state.checkedDirectory = payload
    }
}

function refreshData(state) {
    state.directories = [];
    state.directoriesTree = [];
}
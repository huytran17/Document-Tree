export default {
    reloadDirectories(state, directories) {
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

    createDirectoryTree(state) {
        recurseDirectoryTree(state)
    },

    addChildrenDirectory(state) {
        
    },

    cutDirectory

}
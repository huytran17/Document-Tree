export default {
    refreshDocuments(state, documents) {
        refreshData(state);
        state.documents = documents
    },

    getRootNodes(state) {
        for (var i = 0; i < state.documents.length; i++) {
            if (!state.documents[i].documentId) {
                state.documentsTree.push(state.documents[i]);
                state.documents.splice(i, 1);
                --i;
            }
        }
    },

    initialChildrenDocument(state, parentDocument) {
        parentDocument.children = []
    },

    addChildrenDocument(state, payload) {
        payload.parentDocument.children.push(payload.childDocument)
    },

    spliceDocuments(state, position) {
        state.documents.splice(position, 1)
    },
}

function refreshData(state) {
    state.documents = [];
    state.documentsTree = [];
}
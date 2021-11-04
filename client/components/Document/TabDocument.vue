<template>
  <el-container class="h-100 w-100">
    <el-row style="width: 25%">
      <el-col :span="24" class="col1">
        <span class="mk mkdoc">
          <i class="el-icon-plus"></i>
          <span @click="onCreateDocument">Tạo tài liệu</span>
        </span>
      </el-col>
      <el-col :span="24" class="col2">
        <el-tree
          :data="documentsTree"
          :highlight-current="true"
          node-key="id"
          :render-content="renderContent"
          @node-click="handleNodeClick"
        ></el-tree>
      </el-col>
    </el-row>
    <el-row class="w-100">
      <el-col :span="24">
        <CreateDocument
          v-if="isCreate"
          :inputDocumentLabel="inputDocumentLabel"
          :inputDocumentContent="inputDocumentContent"
        />

        <ViewDocument v-if="isView" />
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import ListDocument from "./ListDocument";
import CreateDocument from "./CreateDocument";
import ViewDocument from "./ViewDocument";
import { mapState, mapActions } from "vuex";

export default {
  name: "TabDocument",
  components: {
    ListDocument,
    ViewDocument,
    CreateDocument,
  },

  data() {
    return {
      isCreate: false,
      isView: false,
      inputDocumentLabel: "Tài liệu mới",
      inputDocumentContent: "",
    };
  },

  computed: {
    ...mapState("document", ["documents", "documentsTree"]),
    ...mapState("directory", ["checkedDirectory"]),
  },

  methods: {
    ...mapActions("document", [
      "createDocument",
      "getFromDirectory",
      "setChecked",
    ]),

    handleNodeClick(data) {
      this.isCreate = false;
      this.isView = true;
      this.setChecked(data);
    },

    async onCreateDocument() {
      this.isCreate = false;
      this.isView = false;

      await this.createDocument({
        label: "Tài liệu mới",
        documentId: null,
        directoryId: this.checkedDirectory.id,
      }).then(async () => {
        this.isCreate = true;
        await this.getFromDirectory(this.checkedDirectory.id);
      });
    },

    renderContent(h, { node, data, store }) {
      return (
        <div class="custom-tree-node">
          <i class="el-icon-document" style="color: #328de0"></i>
          <span style="margin-left:5px;">{node.label}</span>
        </div>
      );
    },
  },
};
</script>

<style scoped>
.el-tree {
  background-color: transparent;
  width: 100%;
}
</style>
<template>
  <el-container class="h-100 w-100">
    <el-row style="width: 25%">
      <el-col :span="24" class="col1">
        <span class="mk mkdoc">
          <i class="el-icon-plus"></i>
          <span @click="makeDocument">Tạo tài liệu</span>
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
        <CreateDocument v-if="isCreated" />
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import ListDocument from "./ListDocument";
import CreateDocument from "./CreateDocument";
import { mapState, mapActions } from "vuex";

export default {
  name: "TabDocument",
  components: {
    ListDocument,
    CreateDocument,
  },

  data() {
    return {
      isCreated: false,
    };
  },

  computed: {
    ...mapState("document", ["documents", "documentsTree"]),
    ...mapState("directory", ["checkedData"]),
  },

  async created() {},

  methods: {
    ...mapActions("document", ["createDocument", "getFromDirectory"]),

    handleNodeClick(data) {},

    async makeDocument() {
      await this.createDocument({
        label: "Tài liệu mới",
        documentId: null,
        directoryId: this.checkedData.id,
      }).then(async () => {
        this.isCreated = true;
        await this.getFromDirectory(this.checkedData.id);
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
.col1 {
  height: 28px;
  text-align: left;
  line-height: 28px;
}
.container {
  width: 60%;
  margin: 0 auto;
  padding: 50px 0;
}
.quill-editor {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}
.el-tree {
  background-color: transparent;
  width: 100%;
}
</style>
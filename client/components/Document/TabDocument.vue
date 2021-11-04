<template>
  <el-container class="h-100 w-100">
    <el-row style="width: 25%">
      <el-col :span="24" class="col1" @click="createDocument">
        <span class="mk mkdoc">
          <i class="el-icon-plus"></i>
          <span>Tạo tài liệu</span>
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
        <CreateDocument />
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import ListDocument from "./ListDocument";
import CreateDocument from "./CreateDocument";
import { mapState } from "vuex";

export default {
  name: "TabDocument",
  components: {
    ListDocument,
    CreateDocument,
  },

  computed: {
    ...mapState("document", ["documents", "documentsTree"]),
  },

  async created() {
    console.log(this.documents);
  },

  methods: {
    createDocument() {
      
    },

    handleNodeClick() {},

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
<template>
  <div>
    <el-tree
      :data="data"
      :highlight-current="true"
      node-key="id"
      :render-content="renderContent"
      @node-click="handleNodeClick"
      ref="treeDirectories"
    ></el-tree>
  </div>
</template>

<script>
import Dropdown from "./Dropdown";
import TreeNode from "./TreeNode";
import { mapState, mapActions } from "vuex";
import { CONFIG } from "../../config/app";

export default {
  name: "ListDirectory",
  props: ["data"],
  components: {
    Dropdown,
  },
  data() {
    return {};
  },

  computed: {
    ...mapState("document", ["documents", "documentsTree"]),
  },

  methods: {
    ...mapActions("document", [
      "createDocumentTree",
      "getRootNodes",
      "getFromDirectory",
    ]),

    async handleNodeClick(data) {
      await this.getFromDirectory(data.id);
    },

    renderContent(h, { node, data, store }) {
      return <TreeNode data={data}></TreeNode>;
    },
  },
};
</script>

<style scoped>
.el-tree {
  background-color: transparent;
  width: 100%;
}
.treeitem {
  position: relative;
}
.el-icon-warning {
  color: #bfc727;
  font-size: 30px;
}
</style>
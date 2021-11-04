<template>
  <div>
    <el-tree
      :data="data"
      :highlight-current="true"
      node-key="id"
      :render-content="renderContent"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script>
import Dropdown from "./Dropdown";
import TreeNode from "./TreeNode";
import { mapActions } from "vuex";

export default {
  name: "ListDirectory",
  props: ["data"],
  components: {
    Dropdown,
  },

  methods: {
    ...mapActions("document", ["getFromDirectory"]),
    ...mapActions("directory", ["setChecked"]),

    async handleNodeClick(data) {
      this.setChecked(data);
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
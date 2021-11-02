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

export default {
  name: "ListDirectory",
  props: ["data"],
  components: {
    Dropdown,
  },
  data() {
    return {};
  },

  methods: {
    handleNodeClick(data) {
      console.log(data);
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
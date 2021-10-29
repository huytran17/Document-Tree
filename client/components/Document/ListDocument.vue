<template>
  <el-tree
    :data="data"
    :highlight-current="true"
    node-key="id"
    :render-content="renderContent"
  ></el-tree>
</template>

<script>
export default {
  name: "ListDirectory",
  props: ["data"],
  methods: {
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
<template>
  <div class="custom-tree-node" :data-id="node.id">
    <i class="el-icon-folder" style="color: #f1d821"></i>
    <span style="margin-left: 5px">{{ node.label }}</span>

    <Dropdown :data="data" :node="node" />
  </div>
</template>

<script>
import Dropdown from "./Dropdown";

export default {
  name: "TreeNode",
  props: ["node", "data"],
  components: { Dropdown },
  data() {
    return { inputDir: "" };
  },
  created() {
  },
};
</script>

<style>
.el-input {
  font-size: 12px;
  height: 10px !important;
  padding: 0;
}
.el-tree-node__content {
}
</style>
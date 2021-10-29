<template>
  <span class="custom-tree-node" :data-id="node.id">
    <i class="el-icon-folder" style="color: #f1d821"></i>
    <slot>
      <span style="margin-left: 5px">{{ node.label }}</span>
    </slot>

    <Dropdown :data="data" :node="node" />
  </span>
</template>

<script>
import Dropdown from "./Dropdown";

export default {
  name: "TreeNode",
  props: ["node", "data"],
  components: { Dropdown },
  created() {
    console.log(this.node);
  },
};
</script>

<style>
</style>
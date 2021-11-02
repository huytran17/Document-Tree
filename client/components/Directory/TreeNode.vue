<template>
  <div class="custom-tree-node" :data-id="data.id"> 
    <div :class="'node-' + data.id">
      <i class="el-icon-folder" style="color: #f1d821"></i>
      <span style="margin-left: 5px">{{ data.label }}</span>

      <Dropdown :data="data" />
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown";

export default {
  name: "TreeNode",
  props: ["data"],
  components: { Dropdown },
  data() {
    return {};
  },
  created() {},
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
.inp {
  position: absolute;
  bottom: 0;
  left: 0;
  top: 100%;
}
.custom-tree-node {
}
</style>
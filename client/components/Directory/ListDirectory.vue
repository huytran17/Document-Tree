<template>
  <div>
    <el-input
      placeholder="Type something"
      v-model="inputMkdir"
      v-if="isCreate"
      autofocus
      @blur="handleBlur"
    >
      <i slot="prefix" class="el-input__icon el-icon-folder"></i>
    </el-input>
    <el-tree
      :data="data"
      :highlight-current="true"
      node-key="id"
      :render-content="renderContent"
    ></el-tree>
    <Dialog title="Chú ý">
      <span slot="message">
        <i class="el-icon-warning"></i>
        <span>Bạn có muốn lưu thư mục vừa tạo?</span>
      </span>
    </Dialog>
  </div>
</template>

<script>
import Dropdown from "./Dropdown";
import Dialog from "../Global/Dialog";
import { Event } from "../../constants/event";

export default {
  name: "ListDirectory",
  props: ["data", "isCreate"],
  components: {
    Dropdown,
    Dialog,
  },
  data() {
    return {
      inputMkdir: "",
    };
  },
  methods: {
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node" data-id={node.id}>
          <i class="el-icon-folder" style="color: #f1d821"></i>
          <span style="margin-left: 5px">{node.label}</span>
          <Dropdown />
        </span>
      );
    },
    handleBlur() {
      this.$nuxt.$emit("open-global-dialog", {
        dialogEvent: Event.CREATE_DIR,
        dialogData: this.inputMkdir,
      });
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
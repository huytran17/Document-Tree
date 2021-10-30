<template>
  <div>
    <el-input
      placeholder="Thư mục mới"
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
      @node-click="handleNodeClick"
      children="directories"
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
import TreeNode from "./TreeNode";
import Vue from "Vue";
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
  created() {
    this.$nuxt.$on(Event.CREATE_SUBDIR, (data) => {
     //TODO
    });
  },
  methods: {
    handleNodeClick(data) {
      console.log(data.label);
    },

    renderContent(h, { node, data, store }) {
      return <TreeNode data={data} node={node}></TreeNode>;
    },

    handleCommand(command) {
      console.log(command);
    },

    handleBlur() {
      this.$nuxt.$emit(Event.OPEN_GLOBAL_DIALOG, {
        dialogEvent: Event.CREATE_DIR,
        dialogData: {
          label: this.inputMkdir,
        },
      });
    },

    append(data) {
      const newChild = { id: 100, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.unshift(newChild);
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
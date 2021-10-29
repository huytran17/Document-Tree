<template>
  <el-dropdown
    trigger="click"
    style="position: absolute; right: 5px"
    v-on:command="handleCommand"
  >
    <span class="el-dropdown-link" @click.stop="">
      <i class="el-icon-more"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="create" icon="el-icon-plus">
        Tạo thư mục con
      </el-dropdown-item>
      <el-dropdown-item command="edit" icon="el-icon-edit"
        >Sửa tên</el-dropdown-item
      >
      <el-dropdown-item command="delete" icon="el-icon-delete"
        >Xóa</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { Event } from "../../constants/event";

export default {
  name: "DirectoryDropdown",
  props: ["data", "node"],
  methods: {
    handleCommand(command) {
      switch (command) {
        case "create":
          this.$nuxt.$emit(Event.CREATE_SUBDIR, {
            data: this.data,
            node: this.node,
          });
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
</style>
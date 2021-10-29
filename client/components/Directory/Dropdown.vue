<template>
  <el-dropdown trigger="click" style="position: absolute; right: 5px">
    <span class="el-dropdown-link">
      <i class="el-icon-more"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-plus"> Tạo thư mục con </el-dropdown-item>
      <el-dropdown-item icon="el-icon-edit">Sửa tên</el-dropdown-item>
      <el-dropdown-item icon="el-icon-delete">Xóa</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "DirectoryDropdown",
};
</script>

<style>
</style>
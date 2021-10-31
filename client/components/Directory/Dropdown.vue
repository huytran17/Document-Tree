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

    <!-- modal nhập thông tin -->
    <el-dialog
      title="Tạo thư mục con"
      :visible.sync="dialogFormVisible"
      :before-close="handleCloseModal"
      width="400px"
    >
      <el-form>
        <el-form-item label="Tên thư mục" :label-width="formLabelWidth">
          <el-input
            v-model="directoryLabel"
            autocomplete="off"
            placeholder="Thư mục mới"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Hủy</el-button>
        <el-button type="primary" @click="createSubDirectory">Tạo</el-button>
      </span>
    </el-dialog>
  </el-dropdown>
</template>

<script>
import { CONFIG } from "../../config/app";

export default {
  name: "DirectoryDropdown",
  props: ["data"],
  components: {},
  data() {
    return {
      dialogFormVisible: false,
      directoryLabel: "",
      formLabelWidth: "120px",
    };
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "create":
          this.dialogFormVisible = true;
          break;
        default:
          break;
      }
    },

    handleCloseModal(done) {
      this.$confirm(
        `Bạn có muốn tạo thư mục ${this.directoryLabel || "Thư mục mới"} không?`
      )
        .then((_) => {
          this.createSubDirectory();

          done();
        })
        .catch((_) => {});
    },

    async createSubDirectory() {
      await this.$axios
        .$post(`${CONFIG.BASE_URL}/api/directories/create`, {
          label: this.directoryLabel || "Thư mục mới",
          directoryId: this.data.id,
        })
        .then((res) => {});
    },
  },
};
</script>

<style>
</style>
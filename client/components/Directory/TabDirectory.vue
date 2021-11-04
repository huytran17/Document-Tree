<template>
  <el-container class="h-100 w-100">
    <el-row class="w-100">
      <el-col :span="24">
        <span class="mk mkdir">
          <i class="el-icon-plus"></i>
          <span @click="isCreate = true">Tạo thư mục</span>
        </span>
      </el-col>

      <el-col :span="24">
        <el-input
          placeholder="Thư mục mới"
          v-model="inputDirectoryLabel"
          v-if="isCreate"
          autofocus
          @blur="dialogVisible = true"
        >
          <i slot="prefix" class="el-input__icon el-icon-folder"></i>
        </el-input>
      </el-col>

      <el-col :span="24">
        <ListDirectory
          :data="directoriesTree"
          :isCreate="isCreate"
        ></ListDirectory>
      </el-col>
    </el-row>

    <portal to="portal_root">
      <el-dialog title="Chú ý" :visible.sync="dialogVisible" width="30%">
        <slot name="message">Bạn có muốn tạo thư mục này không?</slot>
        <span slot="footer" class="dialog-footer">
          <el-button @click="refreshData"> Hủy </el-button>
          <el-button type="primary" @click="onCreateDirectory">
            Đồng ý
          </el-button>
        </span>
      </el-dialog>
    </portal>
  </el-container>
</template>

<script>
import ListDirectory from "./ListDirectory";
import { mapActions, mapState } from "vuex";

export default {
  name: "TabDirectory",
  components: {
    ListDirectory,
  },

  data() {
    return {
      isCreate: false,
      dialogVisible: false,
      inputDirectoryLabel: "",
    };
  },

  computed: {
    ...mapState("directory", ["directories", "directoriesTree"]),
  },

  async created() {
    this.getDirectoryTree();
  },

  methods: {
    ...mapActions("directory", [
      "fetchDirectories",
      "getRootNodes",
      "createDirectoryTree",
      "createDirectory",
    ]),

    async onCreateDirectory() {
      await this.createDirectory({ label: this.inputDirectoryLabel }).then(
        () => {
          this.$message({
            message: "Đã tạo thư mục.",
            type: "success",
          });
        }
      );

      this.refreshData();
    },

    refreshData() {
      this.dialogVisible = false;
      this.isCreate = false;
      this.inputDirectoryLabel = "";
    },

    async getDirectoryTree() {
      await this.fetchDirectories();
      this.getRootNodes();
      this.createDirectoryTree({
        directoriesTree: this.directoriesTree,
        directories: this.directories,
      });
    },
  },
};
</script>

<style scoped>
.el-row:nth-child(1) .el-row:nth-child(1) {
  height: 28px;
  text-align: left;
  line-height: 28px;
}
</style>
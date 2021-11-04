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

    <portal to="portal_directory">
      <!-- model tạo thư mục con -->
      <el-dialog
        title="Tạo thư mục con"
        v-if="dialogMkDirVisible"
        :visible.sync="dialogMkDirVisible"
        :before-close="handleCloseMkDirModal"
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
          <el-button @click="dialogMkDirVisible = false">Hủy</el-button>
          <el-button type="primary" @click="onCreateSubDirectory"
            >Tạo</el-button
          >
        </span>
      </el-dialog>

      <!-- model chỉnh sửa thư mục -->
      <el-dialog
        title="Sửa tên thư mục"
        v-if="dialogEditDirVisible"
        :visible.sync="dialogEditDirVisible"
        width="400px"
      >
        <el-form>
          <el-form-item label="Tên thư mục" :label-width="formLabelWidth">
            <el-input
              v-model="directoryLabel"
              autocomplete="off"
              placeholder="Tên thư mục"
              :autofocus="true"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogEditDirVisible = false">Hủy</el-button>
          <el-button type="primary" @click="onUpdateDirectory">Lưu</el-button>
        </span>
      </el-dialog>

      <!-- modal xác nhận xóa -->
      <el-dialog
        title="Xóa thư mục"
        v-if="dialogDeleteDirVisible"
        :visible.sync="dialogDeleteDirVisible"
        width="400px"
      >
        <slot name="message">Bạn có muốn xóa thư mục này không?</slot>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogDeleteDirVisible = false"> Hủy </el-button>
          <el-button type="primary" @click="onRemoveDirectory">
            Đồng ý
          </el-button>
        </span>
      </el-dialog>
    </portal>
  </el-dropdown>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "DirectoryDropdown",
  props: ["data"],

  data() {
    return {
      dialogMkDirVisible: false,
      dialogEditDirVisible: false,
      dialogDeleteDirVisible: false,

      directoryLabel: "",
      formLabelWidth: "120px",
    };
  },

  computed: {
    ...mapState("directory", ["directories", "directoriesTree"]),
  },

  methods: {
    ...mapActions("directory", [
      "fetchDirectories",
      "getRootNodes",
      "createDirectoryTree",
      "createSubDirectory",
      "updateDirectory",
      "removeDirectory",
    ]),
    ...mapMutations("document", ["refreshDocuments"]),

    handleCommand(command) {
      switch (command) {
        case "create":
          this.dialogMkDirVisible = true;
          break;
        case "edit":
          this.dialogEditDirVisible = true;
          break;
        case "delete":
          this.dialogDeleteDirVisible = true;
          break;
        default:
          break;
      }
    },

    handleCloseMkDirModal(done) {
      this.$confirm(
        `Bạn có muốn tạo thư mục ${this.directoryLabel || "Thư mục mới"} không?`
      )
        .then((_) => {
          this.makeSubDirectory();

          done();
        })
        .catch((_) => {});
    },

    async onCreateSubDirectory() {
      await this.createSubDirectory({
        label: this.directoryLabel,
        parentId: this.data.id,
      }).then(() => {
        this.$message({
          message: "Đã tạo thư mục.",
          type: "success",
        });
      });
    },

    async onUpdateDirectory() {
      await this.updateDirectory({
        label: this.directoryLabel,
        id: this.data.id,
      }).then(() => {
        this.$message({
          message: "Cập nhật thành công.",
          type: "success",
        });
      });
    },

    async onRemoveDirectory() {
      await this.removeDirectory({ id: this.data.id }).then(() => {
        this.$message({
          message: "Đã xóa.",
          type: "success",
        });
        this.refreshDocuments();
      });
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

<style>
</style>
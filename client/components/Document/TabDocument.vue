<template>
  <el-container class="h-100 w-100">
    <el-row style="width: 25%">
      <el-col :span="24" class="col1">
        <span class="mk mkdoc">
          <i class="el-icon-plus"></i>
          <span @click="onCreateDocument">Tạo tài liệu</span>
        </span>
      </el-col>
      <el-col :span="24" class="col2">
        <el-tree
          :data="documentsTree"
          :highlight-current="true"
          node-key="id"
          :render-content="renderContent"
          @node-click="handleNodeClick"
        ></el-tree>
      </el-col>
    </el-row>
    <el-row class="w-100">
      <el-col :span="24">
        <UpdateDocument v-if="isUpdate" />

        <ViewDocument v-if="isView" />
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import ListDocument from "./ListDocument";
import UpdateDocument from "./UpdateDocument";
import ViewDocument from "./ViewDocument";
import { mapState, mapActions } from "vuex";

export default {
  name: "TabDocument",
  components: {
    ListDocument,
    ViewDocument,
    UpdateDocument,
  },

  computed: {
    ...mapState("document", [
      "documents",
      "documentsTree",
      "isUpdate",
      "isView",
    ]),
    ...mapState("directory", ["checkedDirectory"]),
  },

  methods: {
    ...mapActions("document", [
      "createDocument",
      "getFromDirectory",
      "setChecked",
      "setIsView",
      "setIsUpdate",
    ]),

    handleNodeClick(data) {
      this.setIsUpdate(false);
      this.setIsView(true);
      this.setChecked(data);
    },

    async onCreateDocument() {
      if (!this.checkedDirectory) {
        this.$message({
          message: "Vui lòng chọn 1 thư mục.",
          type: "warning",
        });
      } else {
        this.setIsUpdate(false);
        this.setIsView(false);

        await this.createDocument({
          label: "Tài liệu mới",
          documentId: null,
          directoryId: this.checkedDirectory.id,
        }).then(async () => {
          this.$message({
            message: "Đã tạo tài liệu.",
            type: "success",
          });
          this.setIsUpdate(true);
          await this.getFromDirectory(this.checkedDirectory.id);
        });
      }
    },

    renderContent(h, { node, data, store }) {
      return (
        <div class="custom-tree-node">
          <i class="el-icon-document" style="color: #328de0"></i>
          <span style="margin-left:5px;">{node.label}</span>
        </div>
      );
    },
  },
};
</script>

<style scoped>
.el-tree {
  background-color: transparent;
  width: 100%;
}
</style>
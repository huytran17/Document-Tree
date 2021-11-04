<template>
  <TabViewDocument>
    <el-row slot="create">
      <el-col :span="24">
        <span @click="onUpdateDocument" style="cursor: pointer"
          ><i class="el-icon-upload"></i> Nhấn để lưu</span
        >
      </el-col>
      <el-col :span="24">
        <el-input v-model="label" size="normal" clearable autofocus></el-input>
      </el-col>
    </el-row>

    <client-only>
      <quill-editor ref="editor" v-model="content" :options="editorOption" />
    </client-only>
  </TabViewDocument>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TabViewDocument from "./TabViewDocument";

export default {
  components: { TabViewDocument },

  computed: {
    ...mapState("document", ["checkedDocument"]),
    ...mapState("directory", ["checkedDirectory"]),
  },

  data() {
    return {
      label: "",
      content: "",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      editorOption: {
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block", "link", "image"],
          ],
        },
      },
    };
  },

  created() {
    this.label = this.checkedDocument
      ? this.checkedDocument.label
      : "Tài liệu mới";
    this.content = this.checkedDocument ? this.checkedDocument.content : "";
  },

  methods: {
    ...mapActions("document", ["updateDocument", "getFromDirectory"]),

    async onUpdateDocument() {
      await this.updateDocument({
        id: this.checkedDocument.id,
        label: this.label,
        content: this.content,
        directoryId: this.checkedDirectory.id,
      }).then(async () => {
        this.$message({
          message: "Cập nhật thành công.",
          type: "success",
        });
        await this.getFromDirectory(this.checkedDirectory.id);
      });
    },
  },
};
</script>

<style scoped>
.quill-editor {
  height: 400px;
  overflow-y: auto;
}
.el-input {
  margin-bottom: 2rem;
}
</style>
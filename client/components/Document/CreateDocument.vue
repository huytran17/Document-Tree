<template>
  <el-container class="h-100">
    <el-row class="w-100">
      <el-col :span="12" class="col1">
        <h2>Tiêu đề</h2>
      </el-col>
      <el-col :span="12" class="col2">
        <el-button type="primary" icon="el-icon-edit">Sửa</el-button>
        <el-button type="danger" icon="el-icon-delete">Xóa</el-button>
      </el-col>
    </el-row>
    <el-row class="w-100">
      <el-col :span="4" class="col3 h-100">
        <i class="el-icon-paperclip"></i> 0 hạng mục
      </el-col>
      <el-col :span="12" class="col4">
        <el-avatar size="medium" :src="circleUrl"></el-avatar>
        <p>Trần Văn Huy</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <span @click="onUpdateDocument" style="cursor: pointer"
          ><i class="el-icon-upload"></i> Nhấn để lưu</span
        >
      </el-col>
      <el-col :span="24">
        <el-input v-model="label" size="normal" clearable autofocus></el-input>
      </el-col>
    </el-row>

    <el-row class="h-100">
      <client-only>
        <quill-editor
          ref="editor"
          v-model="content"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
        />
      </client-only>
    </el-row>
  </el-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["inputDocumentLabel", "inputDocumentContent"],

  computed: {
    ...mapState("document", ["checkedDocument"]),
    ...mapState("directory", ["checkedDirectory"]),
  },

  data() {
    return {
      label: this.inputDocumentLabel,
      content: this.inputDocumentContent,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      editorOption: {
        // Some Quill options...
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
          ],
        },
      },
    };
  },

  mounted() {
    console.log("App inited, the Quill instance object is:", this.$refs.editor);
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
        await this.getFromDirectory(this.checkedDirectory.id);
      });
    },

    onEditorBlur(editor) {
      console.log("editor blur!", editor);
    },

    onEditorFocus(editor) {
      console.log("editor focus!", editor);
    },

    onEditorReady(editor) {
      console.log("editor ready!", editor);
    },
  },
};
</script>

<style scoped>
.el-container {
  padding: 10px;
  flex-direction: column;
}
.col1 {
  text-align: left;
}
.col2 {
  text-align: right;
}
.col3,
.col4 {
  text-align: left;
  display: flex;
  align-items: center;
}
.el-avatar {
  margin-right: 10px;
}
.quill-editor {
  height: 400px;
  overflow-y: auto;
}
.el-input {
  margin-bottom: 2rem;
}
</style>
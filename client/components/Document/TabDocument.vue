<template>
  <el-container class="h-100 w-100">
    <el-row style="width: 25%">
      <el-col :span="24" class="col1" @click="createDocument">
        <span class="mk mkdoc">
          <i class="el-icon-plus"></i>
          <span>Tạo tài liệu</span>
        </span>
      </el-col>
      <el-col :span="24" class="col2">
        <ListDocument :data="documentsTree"></ListDocument>
      </el-col>
    </el-row>
    <el-row class="w-100">
      <el-col :span="24">
        <CreateDocument />
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import ListDocument from "./ListDocument";
import CreateDocument from "./CreateDocument";
import { mapState } from "vuex";

export default {
  name: "TabDocument",
  components: {
    ListDocument,
    CreateDocument,
  },

  computed: {
    ...mapState("document", ["documents", "documentsTree"]),
  },

  async created() {
    console.log(this.documents);
  },

  methods: {
    createDocument() {},
  },
};
</script>

<style scoped>
.col1 {
  height: 28px;
  text-align: left;
  line-height: 28px;
}
.container {
  width: 60%;
  margin: 0 auto;
  padding: 50px 0;
}
.quill-editor {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}
</style>
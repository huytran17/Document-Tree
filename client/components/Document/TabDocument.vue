<template>
  <el-container class="h-100 w-100">
    <el-row class="w-100">
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
  </el-container>
</template>

<script>
import ListDocument from "./ListDocument";
import { mapState, mapActions } from "vuex";

export default {
  name: "TabDocument",
  components: {
    ListDocument,
  },

  computed: {
    ...mapState("document", ["documents", "documentsTree"]),
  },

  data() {
    return {
      x: 1,
    };
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
</style>
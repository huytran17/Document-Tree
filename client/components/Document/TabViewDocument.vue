<template>
  <el-container class="h-100">
    <el-row class="w-100">
      <el-col :span="12" class="col1">
        <h2>{{ checkedDocument.label }}</h2>
      </el-col>
      <el-col :span="12" class="col2">
        <el-button type="primary" icon="el-icon-edit" @click="onUpdateDocument"
          >Sửa</el-button
        >
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

    <slot name="create"></slot>

    <el-row class="h-100">
      <slot></slot>
    </el-row>
  </el-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["inputDocumentLabel", "inputDocumentContent"],

  computed: {
    ...mapState("document", ["checkedDocument"]),
  },

  methods: {
    ...mapActions("document", ["setIsUpdate", "setIsView"]),

    onUpdateDocument() {
      this.setIsUpdate(true);
      this.setIsView(false);
    },
  },

  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
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
</style>
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
    <el-row class="h-100">
      <el-col :span="12" :offset="0"></el-col>
      <el-col :span="12" :offset="0"></el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "TabContent",
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
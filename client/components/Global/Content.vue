<template>
  <el-main>
    <el-row :gutter="0" class="h-100">
      <el-col :span="7" class="col1 h-100">
        <el-col>
          <h2>Tài liệu</h2>
        </el-col>
        <el-col class="h-100">
          <el-col :span="12" class="h-100">
            <TabDirectory />
          </el-col>
          <el-col :span="12" class="h-100">
            <TabDocument />
          </el-col>
        </el-col>
        <el-col>Alo</el-col>
      </el-col>

      <el-col :span="17" class="col2 h-100">
        <TabContent />
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import TabDirectory from "../Directory/TabDirectory";
import TabDocument from "../Document/TabDocument";
import TabContent from "../Content/TabContent";

export default {
  name: "Content",
  components: {
    TabDirectory,
    TabContent,
    TabDocument,
  },
};
</script>

<style scoped>
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0;
}
.col1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.col1 > .el-col:nth-child(1) {
  height: 60px;
  text-align: left;
  line-height: 60px;
}
.col1 > .el-col:nth-child(3) {
  height: 40px;
  background-color: green;
}
</style>
<template>
  <el-container class="h-100 w-100">
    <el-row class="w-100">
      <el-col :span="24" class="col1">
        <span class="mk mkdoc">
          <i class="el-icon-plus"></i>
          <span>Tạo tài liệu</span>
        </span>
      </el-col>
      <el-col :span="24" class="col2">
        <ListDocument :data="docs"></ListDocument>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import ListDocument from "./ListDocument";

export default {
  name: "TabDocument",
  components: {
    ListDocument,
  },
  data() {
    return {
      docs: [
        {
          label: "A",
          children: [
            {
              label: "B",
            },
            {
              label: "C",
              children: [
                {
                  label: "D",
                },
              ],
            },
          ],
        },
        {
          label: "E",
          children: [],
        },
      ],
    };
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
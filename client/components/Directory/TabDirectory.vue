<template>
  <el-container class="h-100 w-100">
    <el-row class="w-100">
      <el-col :span="24" class="col1">
        <span class="mk mkdir">
          <i class="el-icon-plus"></i>
          <span @click="createFolder">Tạo thư mục</span>
        </span>
      </el-col>
      <el-col :span="24" class="col2">
        <ListDirectory
          :data="dirs"
          :inputMkdir="inputMkdir"
          :isCreate="isCreate"
        ></ListDirectory>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import ListDirectory from "./ListDirectory";
import { Event } from "../../constants/event";

export default {
  name: "TabDirectory",
  components: {
    ListDirectory,
  },
  data() {
    return {
      dirs: [
        {
          id: 1,
          label: "A",
          children: [
            {
              id: 2,
              label: "B",
            },
            {
              id: 3,
              label: "C",
              children: [
                {
                  id: 4,
                  label: "D",
                },
              ],
            },
          ],
        },
        {
          id: 5,
          label: "E",
          children: [],
        },
      ],
      inputMkdir: "",
      isCreate: false,
    };
  },
  methods: {
    createFolder() {
      this.isCreate = !this.isCreate;
    },
  },
  created() {
    this.$nuxt.$on(Event.CREATE_DIR, (data) => {
      // const dir = {
      //   id: 65,
      //   label: data,
      // };
      // this.dirs.unshift(dir);
      //TODO: gọi api thêm dir

      console.log(data);
    });
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
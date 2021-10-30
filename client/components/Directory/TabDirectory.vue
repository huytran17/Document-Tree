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
          :data="nodes"
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
      dirs: [],
      inputMkdir: "",
      isCreate: false,
      nodes: [],
    };
  },
  methods: {
    createFolder() {
      this.isCreate = !this.isCreate;
    },

    getRootNodes() {
      for (var i = 0; i < this.dirs.length; i++) {
        if (!this.dirs[i].directoryId) {
          this.nodes.push(this.dirs[i]);
          this.dirs.splice(i, 1);
          --i;
        }
      }
    },

    recursiveTree(nodes, search) {
      if (nodes.length === 0) return null;

      nodes.forEach((par) => {
        par.children = [];

        for (var i = 0; i < search.length; i++) {
          if (search[i].directoryId === par.id) {
            par.children.push(search[i]);
            search.splice(i, 1);
            --i;
          }
        }

        return this.recursiveTree(par.children, search);
      });
    },

    async fetchDirs() {
      await this.$axios
        .$get("http://localhost:3000/api/directories/list")
        .then((res) => {
          this.dirs = res.data;
          this.nodes = [];
          this.isCreate = false;
          this.getRootNodes();
          this.recursiveTree(this.nodes, this.dirs);
        });
    },
  },

  async created() {
    await this.fetchDirs();

    this.$nuxt.$on(Event.CREATE_DIR, async (data) => {
      await this.$axios
        .$post("http://localhost:3000/api/directories/create", {
          ...data,
        })
        .then(async (res) => {
          await this.fetchDirs();
        });
    });

    this.$nuxt.$on(Event.CLOSE_GLOBAL_DIALOG, () => {
      this.isCreate = false;
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
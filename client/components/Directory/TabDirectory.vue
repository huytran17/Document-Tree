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
          :data="directoriesTree"
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
import { CONFIG } from "../../config/app";
import { mapActions, mapState } from "vuex";

export default {
  name: "TabDirectory",
  components: {
    ListDirectory,
  },

  computed: {
    ...mapState("directory", ["directories", "directoriesTree"]),
  },

  async created() {
    await this.fetchDirectories();
    this.getRootNodes();
    this.createDirectoryTree();

    this.$nuxt.$on(Event.CREATE_DIR, async (data) => {
      await this.$axios
        .$post(`${CONFIG.BASE_URL}/api/directories/create`, {
          ...data,
        })
        .then(async (res) => {
          await this.fetchDirectories();
        });
    });

    this.$nuxt.$on(Event.CLOSE_GLOBAL_DIALOG, () => {
      this.isCreate = false;
    });
  },

  data() {
    return {
      inputMkdir: "",
      isCreate: false,
    };
  },
  methods: {
    ...mapActions("directory", [
      "fetchDirectories",
      "getRootNodes",
      "createDirectoryTree",
    ]),

    createFolder() {
      this.isCreate = !this.isCreate;
    },

    // getRootNodes() {
    //   for (var i = 0; i < this.directories.length; i++) {
    //     if (!this.directories[i].directoryId) {
    //       this.directoriesTree.push(this.directories[i]);
    //       this.directories.splice(i, 1);
    //       --i;
    //     }
    //   }
    // },

    // createDirectoryTree(directoriesTree, restNodes) {
    //   if (directoriesTree.length === 0) return null;

    //   directoriesTree.forEach((parentNode) => {
    //     parentNode.children = [];

    //     for (var i = 0; i < restNodes.length; i++) {
    //       if (restNodes[i].directoryId === parentNode.id) {
    //         parentNode.children.push(restNodes[i]);
    //         restNodes.splice(i, 1);
    //         --i;
    //       }
    //     }

    //     return this.createDirectoryTree(parentNode.children, restNodes);
    //   });
    // },

    // async fetchDirectories() {
    // await this.$axios
    //   .$get(`${CONFIG.BASE_URL}/api/directories/list`)
    //   .then((res) => {
    //     console.log(this.$store.state.directory.directories);
    //     this.directories = res.data;
    //     this.directoriesTree = [];
    //     this.isCreate = false;
    //     this.getRootNodes();
    //     this.createDirectoryTree(this.directoriesTree, this.directories);
    //   });
    // },
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
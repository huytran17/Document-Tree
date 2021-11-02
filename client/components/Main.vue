<template>
  <el-container class="h-100">
    <Header />
    <el-container>
      <SideBar />
      <Content />
    </el-container>
    <portal-target name="portal_root"></portal-target>
  </el-container>
</template>

<script>
import Header from "./Global/Header";
import SideBar from "./Global/SideBar";
import Content from "./Global/Content";

export default {
  name: "Main",
  components: {
    Header,
    SideBar,
    Content,
  },
};
</script>

<style scoped>
.el-container:first-child {
  display: flex;
  flex-direction: column;
}
</style>
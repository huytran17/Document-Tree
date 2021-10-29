<template>
  <el-alert :title="alertTitle" type="success" show-icon> </el-alert>
</template>

<script>
export default {
  name: "GlobalAlert",
  props: ["alertTitle"],
};
</script>

<style>
</style>
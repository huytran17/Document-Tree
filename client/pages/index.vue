<template>
  <Main />
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#__layout {
  height: 100vh;
  margin: 0;
}
.h-100 {
  height: 100%;
}
.w-100 {
  width: 100%;
}
.w-75 {
  width: 75%;
}
.w-50 {
  width: 50%;
}
.el-tree-node__content {
  height: 30px;
  margin: 2px 0;
  border-radius: 6px;
}
.el-tree-node__content .el-icon-more {
  display: none;
}
.el-tree-node__content:hover .el-icon-more {
  display: inline-block !important;
}
.mk {
  cursor: pointer;
  display: inline-block;
  width: 100%;
  color: #8e8e8e;
}
.mk:hover {
  color: #000000;
}
</style>
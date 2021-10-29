<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
    <slot name="message"> This is a message </slot>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">
        <slot name="cancelText">Hủy</slot>
      </el-button>
      <el-button type="primary" @click="triggerCreateDir">
        <slot name="confirmText">Đồng ý</slot>
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "GlobalDialog",
  props: ["title", "eventType"],
  data() {
    return {
      dialogVisible: false,
      dialogEvent: "",
      dialogData: null,
    };
  },
  created() {
    this.$nuxt.$on("open-global-dialog", (data) => {
      this.dialogVisible = true;
      this.dialogEvent = data.dialogEvent;
      this.dialogData = data.dialogData;
    });
  },
  methods: {
    triggerCreateDir() {
      this.dialogVisible = false;
      this.$nuxt.$emit(this.dialogEvent, this.dialogData);
    },
  },
};
</script>

<style>
.el-dialog {
  text-align: left;
}
.el-dialog-footer {
  text-align: right;
}
.el-dialog__body > * {
  font-size: 18px;
}
</style>
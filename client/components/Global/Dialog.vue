<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
    <slot name="message">This is a message </slot>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onCloseDialog">
        <slot name="cancelText">Hủy</slot>
      </el-button>
      <el-button type="primary" @click="triggerCreateDir">
        <slot name="confirmText">Đồng ý</slot>
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
import { Event } from "../../constants/event";

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
    this.$nuxt.$on(Event.OPEN_GLOBAL_DIALOG, (data) => {
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

    onCloseDialog() {
      this.dialogVisible = false;
      this.$nuxt.$emit(Event.CLOSE_GLOBAL_DIALOG);
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
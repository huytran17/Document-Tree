<template>
  <TabViewDocument>
    <div v-html="checkedDocument.content" style="text-align: left"></div>
  </TabViewDocument>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TabViewDocument from "./TabViewDocument";

export default {
  components: { TabViewDocument },

  computed: {
    ...mapState("document", ["checkedDocument"]),
  },
};
</script>

<style scoped>
</style>
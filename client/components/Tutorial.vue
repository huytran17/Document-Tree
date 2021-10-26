<!-- Please remove this file from your project -->
<template>
  <h1>Hello: {{ this.hello }}</h1>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      hello: "",
    };
  },

  async beforeCreate() {
    await axios
      .get("http://localhost:3000/api/greeter/hello")
      .then((response) => {
        this.hello = response.data;
      });
  },
};
</script>

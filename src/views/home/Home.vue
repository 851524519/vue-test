<template>
  <div id="home">
    <layout>
      <p>我是Home页面</p>
      <a-button type="primary">Button</a-button>
      <div>
        <a-switch default-checked />
      </div>
    </layout>
  </div>
</template>

<script>
import Layout from "@/components/layout/Layout";
export default {
  name: "Home",
  components: {
    Layout
  }
};
</script>

<style scoped>
</style>
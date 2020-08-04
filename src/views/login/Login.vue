<template>
  <div id="login">
    <a-button @click="login">登录</a-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login() {
      this.$router.push('/test')
    }
  }
}
</script>

<style scoped>

</style>
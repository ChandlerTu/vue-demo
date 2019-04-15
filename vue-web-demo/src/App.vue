<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: "app",
  components: {
    Login
  }
};
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
  background: url(./assets/background.png) center;
  background-size: cover;
}
</style>

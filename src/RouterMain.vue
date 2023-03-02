<template>
  <div class="container">
    <div class="menu">
      <router-link to="/About">About</router-link>
      <router-link to="/Hello">Hello</router-link>
      <router-link to="/SelectDemo">SelectDemo</router-link>
      <router-link to="/SelectDemo2ObjectModel">SelectDemo2ObjectModel</router-link>
      <router-link to="/ServerCaseDemo">ServerCaseDemo</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
</script>
<style>
.menu {
  background: rgb(234, 229, 229);
}
.menu a {
  padding: 10px;
}
.content {
  padding: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>

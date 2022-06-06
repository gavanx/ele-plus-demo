<template>
  <div class="container">
    <div class="menu">
      <router-link to="/">home</router-link>
      <router-link to="/hello">hello</router-link>
      <router-link to="/about">about</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script></script>
<style>
.menu {
  background: rgb(234, 229, 229);
}
.menu a {
  padding: 10px;
}
.content {
  background: lightblue;
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

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import SelectDemo from './components/SelectDemo.vue'
import SelectDemo2 from './components/SelectDemo2.vue'
import SelectDemo3 from './components/SelectDemo3.vue'
import ServerCaseDemo from './components/ServerCaseDemo.vue'
import server11 from './components/data/server-1-service-1-ip.json'
import server12 from './components/data/server-1-service-1-ip.json'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <!-- <SelectDemo />
  <SelectDemo2 />
  <SelectDemo3 /> -->
  <div>
    <!-- <ServerCaseDemo /> -->
  </div>
  <div>
    <ServerCaseDemo log-name="server11" :data="server11" />
    <ServerCaseDemo log-name="server12" :data="server12" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

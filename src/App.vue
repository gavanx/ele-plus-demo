<template>
  <SelectDemo />
  <SelectDemo2 />
  <SelectDemo3 />
  <div>
    <ServerCaseDemo log-name="server11" :data="server11" />
    <ServerCaseDemo log-name="server12" :data="server12" />
  </div>
</template>

<script>
import HelloWorld from './pages/Hello.vue'
import SelectDemo from './pages/SelectDemo.vue'
import SelectDemo2 from './pages/select/SelectDemo2.vue'
import SelectDemo3 from './pages/select/SelectDemo3.vue'
import ServerCaseDemo from './components/ServerCaseDemo.vue'
import server11 from './data/server-1-service-1-ip.json'
import server12 from './data/server-1-service-1-ip.json'
</script>
<style></style>

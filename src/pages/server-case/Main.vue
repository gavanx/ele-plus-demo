<template>
  <div>
    <ServerCaseWithLog log-name="server11" :data="server11" />
    <ServerCaseWithLog log-name="server12" :data="server12" />
  </div>
</template>

<script>
import ServerCaseWithLog from './ServerCaseWithLog.vue'
import server11 from '../../data/server-1-service-1-ip.json'
import server12 from '../../data/server-1-service-1-ip.json'
export default {
  components: {
    ServerCaseWithLog,
  },
}
</script>
<style></style>

<template>
  <ServerCase2 :data="serverList" @changDateFn="serverCaseChangFn" />
</template>

<script>
import ServerCase2 from './custom/server-case2.vue'
import servers from './data/servers.json'

export default {
  name: 'dash-board',
  components: {
    ServerCase2,
  },
  data() {
    return {
      serverList: servers.data,
    }
  },
  methods: {
    serverCaseChangFn(param) {
      // 数据处理
      // this.env = param.env
      // this.searchParams.service = param.service
      // this.instance = param.instance
      // this.selectChange()
      console.log('serverCaseChangFn', param)
    },
  },
}
</script>

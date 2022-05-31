<template>
  <ServerCase :data="serverList" @changDateFn="serverCaseChangFn" />
</template>

<script>
import ServerCase from './custom/server-case.vue'

export default {
  name: 'dash-board',
  components: {
    ServerCase,
  },
  data() {
    return {
      serverList: [],
    }
  },
  methods: {
    serverCaseChangFn(param) {
      // 数据处理
      this.env = param.env
      this.searchParams.service = param.service
      this.instance = param.instance
      this.selectChange()
    },
  },
}
</script>

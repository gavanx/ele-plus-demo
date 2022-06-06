<template>
  <ServerCase2 :data="data" @changDateFn="serverCaseChangFn" />
</template>

<script>
import ServerCase2 from './custom/server-case2.vue'

export default {
  name: 'dash-board',
  components: {
    ServerCase2,
  },
  props: {
    logName: {
      required: true,
    },
    data: {
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    serverCaseChangFn(param) {
      // 数据处理
      // this.env = param.env
      // this.searchParams.service = param.service
      // this.instance = param.instance
      // this.selectChange()
      console.log(logName, param)
    },
  },
}
</script>

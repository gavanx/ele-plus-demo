<template>
  <span>
    <Select :data="searchParams.env" placeholder="请选择环境"
            class="select-env"
            multiple
            :options="Object.keys(serverEnvList)"
            labelKey="" valueKey=""
            isShowCheckAll
            mutexOption="All"
            style="width: 148px"
            @changDateFn="envDataChange"/>
    <Select :data="searchParams.service" placeholder="请选择应用"
            class="select-env"
            v-if="serviceOptions && JSON.stringify(serviceOptions) != '{}'"
            multiple
            :options="Object.keys(serviceOptions)"
            labelKey="" valueKey=""
            isShowCheckAll
            mutexOption="All"
            style="width: 148px"
            @changDateFn="serviceChange"/>
    <Select :data="searchParams.instance" placeholder="请选择实例"
            multiple
            :options="instanceOptions"
            labelKey="" valueKey=""
            isShowCheckAll
            mutexOption="All"
            style="width: 148px"
            @changDateFn="instanceChange"/>
  </span>
</template>

<script>
import Select from './select.vue';

export default {
  name: 'dash-board-case',
  components: { Select },
  props: {
    data: null, // 绑定值
  },
  data() {
    return {
      searchParams: {
        env: ['All'], // 应用环境
        service: ['All'], // 应用
        instance: ['All'], // IP实例选中值
      },
      serverEnvList: {}, // 应用环境 - 应用 - IP映射列表
      instanceOptions: [], // 实例下拉选项
    }
  },
  watch: {
    data: {
      handler(data) {
        // 应用的环境、IP映射列表数据
        const param = {
          'All': data && (data.list || data.allIps) || []
        }
        const envData = data && data.envIpMapping || []
        this.serverEnvList = {
          ...param,
          ...envData
        };
        this.searchParams = {
          env: ['All'], // 应用环境
          service: ['All'], // 应用
          instance: ['All'], // IP实例选中值
        }
        this.serverEnvOption(); // 数据处理
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // 数据处理 按环境选中值，获取实例ip下拉选项
    serverEnvOption() {
      let list = ['All'];
      this.serverListHandle(); // 应用数据处理
      for(let i=0; i<this.searchParams.env.length; i++) {
        let serveList = this.serverEnvList[this.searchParams.env[i]]
        list = [
          ...list,
          ...(serveList.envIps || serveList)
        ]
      }
      this.instanceOptions = list
    },
    // 应用数据处理
    serverListHandle() {
      // 判断是否有应用数据
      let isServer = false
      let serviceList = {}; // 服务
      for(let i=0; i<this.searchParams.env.length; i++) {
        if (this.searchParams.env[i] === 'All') {
          for (let i in this.serverEnvList) {
            const list = this.serverEnvList[i] // envIpMapping数据
            if (list.serviceList) {
              isServer = true;
              serviceList = {
                ...serviceList,
                ...list.serviceList
              }
            }
          }
        } else if (this.serverEnvList[this.searchParams.env[i]].serviceList) {
          isServer = true;
          serviceList = {
            ...serviceList,
            ...this.serverEnvList[this.searchParams.env[i]].serviceList
          }
        }
      }
      if (isServer) {
        const ip = this.serverEnvList['All'];
        this.serverEnvList['All'] = {
          envIps: ip,
          serviceList
        }
        this.serviceOptions = serviceList
      } else {
        this.serviceOptions = null
      }
    },
    // 环境change事件
    envDataChange(val) {
      this.searchParams = {
        env: val, // 应用环境
        service: ['All'], // 应用
        instance: ['All'], // IP实例选中值
      }
      this.selectChange(); // 改变grafana地址实例选中值
      this.serverEnvOption(); // 按环境选中值，获取实例ip下拉选项
    },
    // 应用change事件
    serviceChange(val) {
      this.searchParams.instance = ['All'];
      let list = []
      for(let i=0; i<val.length; i++) {
        list = [
          ...list,
          ...this.serviceOptions[val[i]]
        ]
      }
      this.instanceOptions = list
    },
    // 实例change事件
    instanceChange(val) {
      this.searchParams.instance = val;
      this.selectChange(); // 改变grafana地址实例选中值
    },
    // 选中值change事件
    selectChange() {
      this.$emit('changDateFn', this.searchParams)
    }
  }
}
</script>

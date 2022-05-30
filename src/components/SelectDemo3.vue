<template>
  <Select
    :data="env"
    placeholder="请选择环境"
    multiple
    :options="envOptions"
    labelKey=""
    valueKey=""
    isShowCheckAll
    mutexOption="All"
    class="select"
    @changDateFn="envDataChange"
  />
  <el-select placeholder="请选择环境2" :options="envOptions" />
</template>

<script>
import Select from './custom/select.vue'
export default {
  components: {
    Select,
  },
  data() {
    return {
      envOptions: ['a', 'b'],
      env: '',
    }
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

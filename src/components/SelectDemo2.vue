<template>
  <el-select v-model="value" placeholder="请选择2">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      options: ['1', '2', '3'],
      value: '',
    }
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

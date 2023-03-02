<template>
  <el-select v-model="value" placeholder="请选择Object">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item">
    </el-option>
  </el-select>
</template>

<script>
export default {
  watch: {
    value(v) {
      console.log('select value', v)
    }
  },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      value: null,
    }
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

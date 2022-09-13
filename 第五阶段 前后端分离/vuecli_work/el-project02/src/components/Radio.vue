<template>
  <el-radio v-model="radio" label="0">否
      <el-radio v-model="radio" label="1">是
      </el-radio>
      </el-radio>
  
</template>

<script>
  export default {
    data () {
      return {
        radio: '0'
      };
    }
  }
</script>

<style scoped>

</style>

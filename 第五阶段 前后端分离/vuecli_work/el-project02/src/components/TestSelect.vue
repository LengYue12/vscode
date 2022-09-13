<template>
<!-- v-model的值，为当前选项的value的属性值 label 选项的标签名称 -->
    <el-select v-model="status" placeholder="请选择">
    <el-option
      v-for="item in Object.keys(statusMappings)"
      :key="item"
      :label="statusMappings[item]"
      :value="item">
    </el-option>
  </el-select>
</template>

<script>
export default {
    
    data() {
      return {
        options: [
        {
          value: '选项5',
          label: '北京烤鸭'
        }
        ],
        statusMappings:{
            0: "已隐藏",
            1: "待更新",
            2: "已更新"
        },
        status:""
      };
    }

}
</script>

<style scoped>

</style>

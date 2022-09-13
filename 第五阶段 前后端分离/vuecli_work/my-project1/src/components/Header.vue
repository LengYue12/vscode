<template>
    <div class="header">{{msg}}</div>
</template>

<script>
// JS 部分
export default {
    name:"Header",   // 组件的名称
    // data() {    // data函数
    //     return {
    //         msg:"这是一个Header组件"
    //     }
    // },
    // 参数传递
    // 当前组件可以通过msg属性接收值
    props:['msg']
}
</script>

// scoped 表示当前的样式只作用于当前组件中的 template 视图
<style scoped>
.header {
    height: 100px;
    line-height: 100px;
    background-color: #eee;
    text-align: center;
    color: blue
}
</style>


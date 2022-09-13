<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <Header msg="这是通过props 属性进行赋值显示出来"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Home', // 组件名称，用于路由的跳转
  components: {
    // HelloWorld
    Header
  }
}
</script>

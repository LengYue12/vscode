<template>
    <el-dialog :show-close="false" title="用户登录" :visible.sync="dialogFormVisible">

  <el-form>
    <el-form-item label="用户名称" :label-width="formLabelWidth">
      <el-input v-model="user.username" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="用户密码" :label-width="formLabelWidth">
      <el-input v-model="user.password" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>

  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: true,
        formLabelWidth: '120px',
        user:{username:"",password:""}
      };
    },
    methods: {
      // 登录的方法
      login(){
        
        // 定义常量保存url
        const url = "https://d1eca569-371d-46c7-badb-dc6db990d813.mock.pstmn.io/login";

        
        // 发送请求
        this.axios(url,{
          // 携带的参数
          param:{
            username:this.user.username,
            password:this.user.password
          }
        }).then((resp) => {
          // 请求成功
          console.log(resp);
          alert("登录成功");

          // 成功就关闭 对话框
          this.dialogFormVisible=false;

          // 进行页面跳转，跳转到首页，在前端进行页面跳转 必须使用路由，使用$router对象中的push方法
          this.$router.push("index");
        }).catch((error) => {
          // 登录失败 提供消息提示
          this.$message.error('对不起，登录失败');
        });
      },
    }
  }
</script>

<style scoped>

</style>

<template>
    <div>
        <el-row :gutter="20">
  <el-col :span="6"><el-input
  prefix-icon="el-icon-search"
  placeholder="课程名称"
  v-model="filter.course_name"
  clearable>
</el-input></el-col>
<el-col span="1"><el-button type="primary" @click="search">点击查询</el-button></el-col>
</el-row>
        
        <el-table
     v-loading="loading"
     element-loading-text="拼命加载中"
    :data="courseList"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      >
    </el-table-column>
    <el-table-column
      prop="course_name"
      label="课程名称"
     >
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格">
    </el-table-column>
    <el-table-column
      prop="sort_num"
      label="排序">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
        courseList: [],
        loading:true,
        filter:{course_name:""}
        };
    },
    // 定义钩子函数  created,在DOM页面生成之前执行
    created() {
        // 在页面生成之前，调用 loadCourse()
        this.loadCourse();
    },

    methods: {
        // 方法一：获取课程信息
        loadCourse(){
            //alert("loadCourse方法执行了");
            // 发送请求获取课程数据
            const url = "http://localhost:8080/lagou_edu_home/course";
            return this.axios.get(url,{
                params:{
                    methodName:"findCourseList"
                }
            }).then((resp) => {
                console.log(resp.data);
                // 将获取到的数据 赋值给courseList
                this.courseList = resp.data;
               
                // 取消加载动画
                this.loading=false
            }).catch((error) => {
                // 异常
                this.$message.error("获取数据失败！");
            })     
        },
        
        // 根据课程名查询方法
        search(){
            // 开启加载提示
            this.loading = true;

            // 发送请求
            const url = "http://localhost:8080/lagou_edu_home/course"
            return this.axios.get(url,{
                // 携带参数
                params:{
                    methodName:"findByCourseNameAndStatus",
                    // 获取双向绑定的课程名
                    course_name:this.filter.course_name
                }
            }).then((resp) => {
                console.log(resp.data);
                // 把查询出的数据赋值到courseList
                this.courseList = resp.data;
                // 关闭加载
                this.loading = false;

            }).catch((error) => {
                // 异常
                this.$message.error("获取数据失败！");
            })
        }
    },
}
</script>

<style scoped>

</style>


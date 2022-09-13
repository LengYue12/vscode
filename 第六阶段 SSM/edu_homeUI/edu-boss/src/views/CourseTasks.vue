<template>
  <section class="course-tasks">
    <!-- 头部 -->
    <div class="header">
      <!-- 显示当前课程的名称 -->
      <el-page-header @back="() => this.$router.back()" :content="addSectionForm.course_name" />

      <!-- 添加章节按钮 -->
      <el-button type="primary" icon="el-icon-plus" @click="handleShowAddSection">添加章节</el-button>

      
    </div>

    <!-- 树形控件,展示课程对应的章节信息 -->
    <el-tree
      :data="sections"
      :props="treeProps"
      v-loading="loading"
      element-loading-text="数据加载中..."
    >
      <!-- slot-scope:代表当前树节点内容,有两个参数 data表示当前树节点, node表示当前节点状态 -->
      <div class="inner" slot-scope="{ data, node }">
        <span>{{ data.section_name || data.theme }}</span>

        <!-- 操作按钮 -->
        <span class="actions">
          <!-- 编辑章节  @click.stop 阻止事件冒泡 -->
          <el-button v-if="node.level == 1" size="small" @click.stop="handleEditSection(data)">编辑</el-button>


          <!-- 添加课时 -->
          <el-button v-if="node.level == 1" type="primary" size="small" @click.stop="handleShowAddLesson(data)">添加课时</el-button>

          <!-- 编辑课时 -->
          <el-button v-if="node.level == 2" size="small" @click.stop="handleEditLesson(data)">编辑</el-button>

          <!-- 修改章节状态 -->
          <el-button
            v-if="node.level == 1"
            size="small"
            @click.stop="showStatus(data)"
          >{{ statusMapping[data.status] }}</el-button>

          
        </span>
      </div>
    </el-tree>
    <!-- 树形控件,展示课程对应的章节信息 -->

    <!-- 修改章节状态-对话框 -->
    <el-dialog class="toggle-dialog" title="提示" :visible.sync="showStatusForm" width="30%">
      <header class="toggle-header">
        <i class="el-icon-info"></i>
        <span>
          当前状态：{{
          statusForm.data && statusMapping[statusForm.data.status]
          }}
        </span>
      </header>

      <el-form label-position="right" label-width="110px" :model="statusForm">
        <el-form-item label="状态变更为：">
          <el-select @change="$forceUpdate()" v-model="statusForm.status" style="width: 100%">
            <el-option
              v-for="(item,index) in Object.keys(statusMapping)"
              :key="index"
              :label="statusMapping[item]"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="showStatusForm = false">取 消</el-button>
        <el-button type="primary" @click="updateStatus">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改章节状态 -->

    <!-- 添加或修改章节 -->
    <el-dialog class="add-dialog" title="章节信息" :visible.sync="showAddSection">
      <el-form
        label-position="right"
        label-width="80px"
        ref="addSectionForm"
        :model="addSectionForm"
      >
        <el-form-item label="课程名称" prop="course_name">
          <el-input v-model="addSectionForm.course_name" disabled></el-input>
        </el-form-item>
        <el-form-item label="章节名称" prop="section_name">
          <el-input v-model="addSectionForm.section_name"></el-input>
        </el-form-item>
        <el-form-item label="章节描述" prop="description">
          <el-input type="textarea" v-model="addSectionForm.description"></el-input>
        </el-form-item>
        <el-form-item label="章节排序" prop="order_num">
          <el-input v-model="addSectionForm.order_num" type="number">
            <template slot="append">数字控制排序，数字越大越靠后</template>
          </el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="showAddSection = false">取 消</el-button>
        <el-button type="primary" @click="handleAddSection">确 定</el-button>
      </span>
    </el-dialog>
    
    <!-- 添加或修改课时 -->
    <el-dialog class="add-dialog" title="基本信息" :visible.sync="showAddLesson">
      <el-form
        label-position="right"
        label-width="80px"
        ref="addLessonForm"
        :model="addLessonForm"
      >
        <el-form-item label="课程名称" prop="course_name">
          <el-input v-model="addLessonForm.course_name" disabled></el-input>
        </el-form-item>
        <el-form-item label="章节名称" prop="section_name">
          <el-input v-model="addSectionForm.section_name" disabled></el-input>
        </el-form-item>
        <el-form-item label="课时名称" prop="theme">
          <el-input v-model="addLessonForm.theme"></el-input>
        </el-form-item>
        <el-form-item label="时长" prop="duration">
          <el-input v-model="addLessonForm.duration">
            <template slot="append">请输入数字，单位：分钟</template>
          </el-input>
        </el-form-item>
        <el-form-item label="是否开放试听" prop="is_free">
          <!-- <el-input v-model="addLessonForm.is_free"> -->
           
              <el-radio v-model="addLessonForm.is_free" label="0">否
      <el-radio v-model="addLessonForm.is_free" label="1">是
      </el-radio>
      </el-radio>
            
          <!-- </el-input> -->
        </el-form-item>
        <el-form-item label="课时排序" prop="order_num">
          <el-input v-model="addLessonForm.order_num" type="number">
            <template slot="append">数字控制排序，数字越大越靠后</template>
          </el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="showAddLesson = false">取 消</el-button>
        <el-button type="primary" @click="handleAddLesson">确 定</el-button>
      </span>
    </el-dialog>

  </section>
</template>

<script>
//引入axios
import { axios } from "../utils";

export default {
  name: "CourseTasks",
  title: "课程结构",
  data() {
    //定义章节信息
    const addSectionForm = {
      course_id: undefined,
      course_name: "",
      section_name: "",
      description: "",
      order_num: 0
    };

    // 定义课时信息
    const addLessonForm ={
      course_id: undefined,
      section_id:undefined,
      course_name: "",
      section_name: "",
      theme:"",
      duration: undefined,
      is_free: "",
      order_num: 0
    }

    //章节与课时信息,树形结构
    const treeProps = {
      // 设置章节与课时子节点的名称
      label: item => {
        return item.section_name || item.theme;
      },
      // 指定子树为节点对象的某个属性值
      children: "lessonList"
    };

    //定义章节状态信息  状态，0:隐藏；1：待更新；2：已发布
    const statusMapping = {
      0: "已隐藏",
      1: "待更新",
      2: "已更新"
    };

    // 状态表单
    const statusForm = {
      id:undefined,
      status: 0,
      data:{}
    };

    return {
      addSectionForm,
      addLessonForm,
      treeProps,
      sections: [],
      statusForm, //状态表单
      statusMapping,

      loading: false, //树形控件
      showAddSection: false, //添加或修改章节
      showAddLesson:false,  // 显示课时的表单
      showStatusForm: false //状态修改
    };
  },
  created() {
    //1.显示当前页面在网站中的位置
    this.$breadcrumbs = [
      { name: "Courses", text: "课程管理" },
      { text: "课程结构" }
    ];

    // 2.从路由中获取传递的参数  课程id
    const id = this.$route.params.courseId;
    if(!id) return this.redirectToError;

    // 3.加载课程信息
    this.loadCourse(id);

    // 4.加载树形结构(章节与课时信息)
    this.loadChildren(id);  


  },
  methods: {
    //方法1: 加载课程信息
    loadCourse(id) {
      axios.get("/courseContent",{
        params:{
          methodName:"findCourseById",
          course_id:id
        }
      }).then(resp => {
        // 将数据保存到 章节表单对象中
        this.addSectionForm.course_id = resp.data.id,
        
        this.addSectionForm.course_name = resp.data.course_name,
       
       // 将数据保存到 课时表单对象中
        this.addLessonForm.course_id = resp.data.id,
        
        this.addLessonForm.course_name = resp.data.course_name
        
      }).catch(error => {
        this.$message.error("数据获取失败！！！");
      })
    },

    //方法2: 加载树(章节与课程)
    loadChildren(id) {

      this.loading = true;

      axios.get("/courseContent",{
        params:{
          methodName:"findSectionAndLessonByCourseId",
          course_id:id
        }
      }).then(resp => {
        // 获取数据 保存到 sections
        this.sections = resp.data;
        this.loading = false;
      }).catch(error => {
        this.loading = false;
        this.$message.error("数据获取失败！！！");
      })
    },

   

    //方法3: 显示添加章节表单,回显课程信息
    handleShowAddSection() {

      // reset 重置表单
      this.addSectionForm.section_name = '';
        this.addSectionForm.description = '';
        this.addSectionForm.order_num = 0;
      this.showAddSection = true;
    },

    // 显示添加课时表单
    handleShowAddLesson(data) {

      // 将当前树节点的id，也就是章节id赋值给课时表单对象的章节id
      //console.log(data)
      this.addLessonForm.section_id = data.id;
      // reset 重置表单
      this.addLessonForm.theme = '';
        this.addLessonForm.duration = '';
        this.addLessonForm.is_free = 0;
        this.addLessonForm.order_num = 0;
      this.showAddLesson = true;
    },
    

    //方法4: 添加&修改章节操作
    handleAddSection() {

      axios.post("/courseContent",{
        methodName:"saveOrUpdateSection",
        section:this.addSectionForm
      }).then(resp => {
        //debugger;
        this.showAddSection = false;
        //  重新加载列表
        return this.loadChildren(this.addSectionForm.course_id);
      }).then(() => {
        // reset 重置表单
        this.addSectionForm.section_name = '';
        this.addSectionForm.description = '';
        this.addSectionForm.order_num = 0;
      }).catch(error => {
        this.showAddSection = false;
        this.$message.error("操作执行失败！！！");
      })
    },

    //方法4: 添加&修改课时操作
    handleAddLesson() {

      axios.post("/courseContent",{
        methodName:"saveOrUpdateLesson",
        lesson:this.addLessonForm
      }).then(resp => {
        //debugger;
        this.showAddLesson = false;
        //  重新加载列表
        return this.loadChildren(this.addLessonForm.course_id);
      }).then(() => {
        // reset 重置表单
        // this.addLessonForm.theme = '';
        // this.addLessonForm.duration = '';
        // this.addLessonForm.is_free = 0;
        // this.addLessonForm.order_num = 0;
      }).catch(error => {
        this.showAddLesson = false;
        this.$message.error("操作执行失败！！！");
      })
    },


    //方法5: 修改章节回显方法
    handleEditSection(section) {
      // 对象拷贝
      Object.assign(this.addSectionForm,section);
      this.showAddSection = true;
    },

    // 修改课时回显方法
    handleEditLesson(lesson) {
      // 对象拷贝
      //console.log(lesson)
      
      Object.assign(this.addLessonForm,lesson);
       
      this.showAddLesson = true;
    },


    //方法6: 显示章节状态
    showStatus(data) {
      console.log(data)
      // 保存状态表单数据
      this.statusForm.id = data.id;
      this.statusForm.status = data.status.toString();
      this.statusForm.data = data;

      // 显示表单对话框
      this.showStatusForm = true;
    },

    //方法7: 修改章节状态
    updateStatus(statusForm) {

      axios.get("/courseContent",{
        params:{
          methodName:"updateSectionStatus",
          id:this.statusForm.id,
          status:this.statusForm.status
        }
      }).then(resp => {
         this.statusForm.data.status = this.statusForm.status;
         this.statusForm = {};
         this.showStatusForm = false;
      }).catch(error => {
         this.showStatusForm = false;
         this.$message.error("修改状态失败！！！");
      })
    },


    //跳转到错误页面
    redirectToError() {
      this.$router.replace({ path: "/not-found" });
    }
  }
};
</script>

<style lang="scss">
.course-tasks {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .el-tree {
    margin-top: 20px;
  }

  .el-tree,
  .el-tree__empty-block {
    min-height: 200px;
  }

  .el-tree-node__content {
    height: auto;
  }

  .inner {
    display: flex;
    flex: 1 0 0;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .actions {
    margin-left: auto;
  }
}
</style>

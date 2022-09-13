<template>
<!--
    data:展示的数据

    props: 配置树形结构
        defaultProps: {
          children: 'children',     // 指定生成子树的属性名称
          label: 'label'            // 节点名称
        }
 -->
    <el-tree :data="data" :props="defaultProps">
        <!-- slot-scope：作用域插槽
            node：当前节点对象
            data ：当前数据对象
         -->
         <span class="custom-tree-node" slot-scope="{ node, data }">
             <span>{{data.section_name || data.theme}}</span>
            
        </span>
    </el-tree>
</template>

<script>
export default {
    data() {
      return {
            data: [
        {
                "id": 5,
    "course_id": 10,
    "section_name": "麻式太极",
    "description": "麻式太极拳,你动我试试",
    "orderNum": 0,
    "status": 2,
    "create_time": "2019-07-11 10:55:10.0",
    "update_time": "2019-10-09 12:43:01.0",
    "isDel": 0,
        "lessonList": [
        {
        "id": 32,
        "course_id": 10,
        "section_id": 5,
        "theme": "第一讲:如何给自己洗脑",
        "duration": 10,
        "is_free": 1,
        "order_num": 1,
        "status": 2,
        "create_time": "2019-01-23 20:37:02.0",
        "update_time": "2020-02-24 18:37:34.0",
        "isDel": 0
        },
        {
        "id": 33,
        "course_id": 10,
        "section_id": 5,
        "theme": "第二讲:如何给别人洗脑",
        "duration": 10,
        "is_free": 1,
        "order_num": 1,
        "status": 2,
        "create_time": "2019-01-23 20:37:02.0",
        "update_time": "2020-02-24 18:37:34.0",
        "isDel": 0
        }
        ]
    }],
        // 树形结构的展示
        defaultProps: {
          children: 'lessonList',
          label: item => {
              return item.section_name || item.theme
          }
        }
      };
    },
}
</script>

<style scoped>

</style>

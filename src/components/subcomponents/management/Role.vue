<template>
  <div class="user">
    <el-row>
      <h1>角色管理</h1>
    </el-row>
    <el-row style="margin-bottom: 10px;">
      <el-button type="danger" icon="el-icon-delete" @click="delBacch">批量删除</el-button>
      <el-button type="primary" icon="el-icon-plus" @click="addRole">添加角色</el-button>
    </el-row>
    <el-row>
      <el-table :data="tableData" style="width: 100%;" border>
        <el-table-column type="selection" width="60"></el-table-column>
        <el-table-column label="ID" width="120">
          <template slot-scope="scope">{{ scope.$index+1 }}</template>
        </el-table-column>
        <el-table-column prop="name" label="角色名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="power" label="对应权限" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <i class="el-icon-edit icon-control" @click="editOperation(scope)"></i>
            <i
              class="el-icon-delete icon-control"
              @click="delOperation(scope.$index,scope.row.name)"
            ></i>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!-- 操作确认框 -->
    <el-dialog title="提示" :visible.sync="delDialog" width="30%" v-dialogDrag>
      <span>角色删除需谨慎，确认要删除{{ operationName }}角色么？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delDialog=false">取 消</el-button>
        <el-button type="primary" @click="delTable">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="添加角色" :visible.sync="editDialog" width="30%" v-dialogDrag>
      <el-form
      ref="editMsg" label-width="100px" class="demo-ruleForm"
    >
      <el-form-item label="角色名称" prop="name">
        <el-input v-model="editMsg.name"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="describe">
        <el-input v-model="editMsg.describe"></el-input>
      </el-form-item>
      <el-form-item label="对应权限">
        <el-checkbox-group v-model="checkedOption" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="option in options" :label="option" :key="option">{{option}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-row style="text-align: center;">
        <el-button type="success" size="small" @click="editTable">确定</el-button>
        <el-button type="primary" size="small" @click="editDialog = false">取消</el-button>
      </el-row>
    </el-form>
    </el-dialog>
  </div>
</template>
<script>
const options = ['数据查询','数据添加','数据删除','数据修改'];
export default {
  data() {
    return {
      tableData: [
        {
          name: "超级管理员",
          power: '数据增加'
        },
        {
          name: "管理员",
          power: '数据修改'
        },
      ],
      delDialog: false,
      operationIndex: 0,
      operationName: "",
      editDialog: false,

      editMsg: {
        name: "",
        describe: ""
      },
      checkAll: false,
      checkedOption: [],
      options: options
    };
  },
  methods: {
    delOperation(index, name) {
      this.operationIndex = index;
      this.operationName = name;
      this.delDialog = true;
    },
    editOperation(scope) {
      window.console.log(scope);
      this.editDialog = true;
    },
    delTable() {
      if (this.operationName == "超级管理员") {
        this.$message.error("哎呀，手滑了！超级管理员不可删除哟~");
        this.delDialog = false;
        return;
      }
      this.tableData.splice(this.operationIndex, 1);
      this.delDialog = false;
    },
    editTable() {
      this.editMsg.describe="";
      this.editMsg.identity="";
      this.editMsg.name="";
      this.editDialog = false;
    },
    delBacch(){
      window.console.log("00");
    },
    addRole(){
      this.editDialog = true;
    }
  }
};
</script>
<style lang="scss">

</style>
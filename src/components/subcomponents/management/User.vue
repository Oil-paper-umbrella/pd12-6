<template>
  <div class="user">
    <el-row>
      <h1>用户管理</h1>
    </el-row>
    <el-row style="margin-bottom: 10px;">
      <el-button type="danger" icon="el-icon-delete" @click="delBacch">批量删除</el-button>
      <el-button type="primary" icon="el-icon-plus" @click="addRole">添加管理员</el-button>
    </el-row>
    <el-row>
      <el-table :data="tableData" style="width: 100%;" border>
        <el-table-column type="selection" width="60"></el-table-column>
        <el-table-column label="ID" width="120">
          <template slot-scope="scope">{{ scope.$index+1 }}</template>
        </el-table-column>
        <el-table-column prop="name" label="登录名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="email" label="邮箱" show-overflow-tooltip></el-table-column>
        <el-table-column prop="roleName" label="角色" width="120"></el-table-column>
        <el-table-column prop="time" label="加入时间" width="120"></el-table-column>
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
    <el-dialog title="提示" :visible.sync="delDialog" width="30%" v-dialogDrag >
      <span>用户删除需谨慎，确认要删除-{{ operationName }}-用户么？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delDialog=false">取 消</el-button>
        <el-button type="primary" @click="delTable">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="添加管理员" :visible.sync="editDialog" width="30%" v-dialogDrag>
      <el-form
      ref="editMsg" label-width="100px" class="demo-ruleForm"
    >
      <el-form-item label="管理员" prop="name">
        <el-input v-model="editMsg.name"></el-input>
      </el-form-item>
      <el-form-item label="初始密码" prop="name">
        <el-input v-model="editMsg.password"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="name">
        <el-input v-model="editMsg.sex"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="name">
        <el-input v-model="editMsg.tel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="name">
        <el-input v-model="editMsg.email" placeholder="@"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="editMsg.role" placeholder="请选择角色">
          <el-option label="超级管理员" value="superAdmin"></el-option>
          <el-option label="管理员" value="admin"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="remarks"
          maxlength="30"
          show-word-limit
        >
        </el-input>
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
export default {
  data() {
    return {
      tableData: [
        {
          name: "admin",
          roleName: "超级管理员",
          email: 'admin@mail.com',
          time: '2014-6-11 11:11:42'
        },
        {
          name: "zs",
          roleName: "管理员",
          email: 'admin@mail.com',
          time: '2014-6-11 11:11:42'
        }
      ],
      delDialog: false,
      operationIndex: 0,
      operationName: "",
      editDialog: false,

      editMsg: {
        name: "",
        password: "",
        sex: "",
        tel: "",
        email: "",
        role: "",
        remarks: ''
      }
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
.el-table {
  color: white !important;
}
.el-table td,
.el-table th {
  text-align: center !important;
}
.el-table thead {
  color: white !important;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: #111739 !important;
}
.el-table th,
.el-table tr {
  background-color: #111739 !important;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #585e80 !important;
}
.el-table--border td,
.el-table--border th,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: 1px solid #585e80 !important;
}
.el-table--border,
.el-table--group {
  border: 1px solid #585e80 !important;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #0b0f2a !important;
  // color: #2C9EF3;
}
.icon-control {
  margin: 0 5px;
}
.el-table__empty-block {
  background-color: #111739 !important;
}
.el-table__empty-text {
  color: white !important;
}
.el-table,
.el-table__expanded-cell {
  background-color: #111739 !important;
}
</style>
<template>
  <el-card header="登陆">
    <el-form
      :model="form"
      ref="form"
      status-icon
      :rules="rules"
    >
      <el-form-item prop="username">
        <el-input
          v-model="form.username"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('form')"
          style="width: 100%;"
        >登陆</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: checkUsername, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
        }
      });
    }
  }
};
</script>

<style>
.el-card {
  position: fixed;
  left: 38%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.62;
}
.el-card:hover {
  opacity: 1;
}
</style>

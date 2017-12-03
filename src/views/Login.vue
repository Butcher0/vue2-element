<template>
  <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">Admin</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="username"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="password"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">Remember</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="login" :loading="isLoading">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
data() {
    return {
    isLoading: false,
    loginForm: {
        username: 'admin',
        password: '123456'
    },
    loginRules: {
        username: [
        { required: true, message: 'Please input username', trigger: 'blur' },
        ],
        password: [
        { required: true, message: 'Please input password', trigger: 'blur' },
        ]
    },
    checked: true
    };
},
methods: {
    login() {
        this.$refs.loginForm.validate(valid => {
            if (valid) {
                this.isLoading = true
                this.$store.dispatch('Login', this.loginForm).then(() => {
                    this.isLoading = false
                    this.$router.push({ path: '/' })
                }).catch(() => {
                    this.isLoading = false
                })
            } else {
                console.log('error submit!!')
                return false
            }
        })
      }
    }
}
</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
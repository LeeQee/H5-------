<!-- Add "scoped" attribute to limit CSS to this component only -->

<template>
  <div class="container">
    <h3>畅想之星</h3>
    <div class="content">
        <div class="item">
            <el-input placeholder="用户名" v-model="name" clearable @keyup.enter.native="loginEnter"></el-input>
        </div>
        <div class="item">
            <el-input placeholder="密码" v-model="password" clearable @keyup.enter.native="loginEnter" type="password"></el-input>
        </div>
        <el-button type="primary" @click="login">登录</el-button>
        <!-- <p>没有账户?<label @click="toRegister">立即注册</label></p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data () {
    return {
      name: '',
      password: ''
    }
  },

  mounted () {

  },
  methods: {
    loginEnter(e){
      var keyCode = window.event ? e.keyCode : e.which;
      if (keyCode == 13) {
        this.login();
      }
    },
    login(){
      this.$http({
        url: `/login?username=${this.name}&password=${this.password}`,
        method: "POST",
      }).then((res) => {
        if (res.code == 0) {
          let loginUserInfo = {
            data:res.user
          }
          let authList = {
            data:res.auth
          }
          localStorage.setItem("Admin-Token",res['Admin-Token']);
          localStorage.setItem("loginUserInfo",JSON.stringify(loginUserInfo));
          localStorage.setItem("authList",JSON.stringify(authList));
          this.$router.push("/");
        }else{
            this.$toast(res.msg);     
        }
      });
    }
    
  },
};
</script>
<style scoped lang="scss">
.container {
      .content{
        width: 340px;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        .item{
          position: relative;
          margin-bottom: 20px;
          &:nth-of-type(1){
            margin-top: 50px;
          }
          &:nth-of-type(2){
            margin-bottom: 10px;
          }
          /deep/ .el-input__inner{
            border-radius: 0;
            padding-left: 40px;
          }
          img{
            position: absolute;
            top: 10px;
            z-index: 99;
            &:nth-of-type(1){
              left: 10px;
            }
            &:nth-of-type(2){
              right: 10px;
            }
          }
          

        }
        p{
          text-align: right;
          cursor: pointer;
          label{
            color: #03AC92;
            cursor: pointer;
            text-decoration: underline;
          }
        }
        /deep/ .el-button{
          width: 100%;
          border-radius: 0;
          margin-top: 30px;
          margin-bottom: 10px;
          background-color: #0ae;
        }
      }
      
    }
</style>

<style lang="scss" scoped>
  .bottom{
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 53.5px;
    background: #ffffff;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.05); 
    .navBtns{
      display: flex;
      .router-link-active{
        text-align: center;
        flex: 1;
      }
    }
  }
</style>
<template>
  <div class="bottom">
    <div class="navBtns">
        <router-link :to="{ name: 'home' }" :class="currentNav == 0 ? 'activeNav' : ''"><i class=""></i>仪表盘</router-link>
        <router-link :to="{ name: 'contacts'}" :class="currentNav == 1 ? 'activeNav' : ''"><i></i>联系人</router-link>
        <router-link :to="{ name: 'customer'}" :class="currentNav == 2 ? 'activeNav' : ''"><i></i>客户</router-link>
        <router-link :to="{ name: 'mypersonal'}" :class="currentNav == 3 ? 'activeNav' : ''"><i></i>我的</router-link>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      currentNav: 0,
    };
  },
  watch: {
   $route: {
      handler(val) {
        if (val.name == "home" || val.name == "contacts" ||val.name == "customer" ||  val.name == "mypersonal") {
          this.currentNav = 0;
        }else if (val.name == "contacts") {
          this.currentNav = 1;
        }else if (val.name == "customer") {
          this.currentNav = 2;
        }else if (val.name == "bookDetail") {
          this.currentNav = 3;
        }

      },
    },
  },
  mounted() {

  },
  methods: {
 
  },
};
</script>

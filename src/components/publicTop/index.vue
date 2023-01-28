
<template>
  <div class="page-title">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <!-- <van-icon v-if="back" name="arrow-left" class="page-back" @click="toBack" /> -->
    <div class="middlename">
      <span>{{name}}</span>
    </div>
    
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {

    };
  },
  props:{
    name:{ default: null },
    back:{
      default: false
    }
  },
  mounted() {
    
  },
  methods: {
    toBack(){
      this.$router.go(-1)
    }
  },
};
</script>
<style lang="scss">
  .page-title{
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background: #659ded;
    z-index: 999; 
    font-size: 18px;
    color: #FFF;
    text-align: center;
    position: fixed;
    top:0;
    left: 0;
    .left{
      width: 30%;
      text-align: left;
    }
    .middlename{
      width: 40%;
      text-align: center;
    }
    .right{
      width: 30%;
      text-align: right;
    }
    .page-back{
      position: absolute;
      left: 10px;
      top:10px;
      font-size: 24px;
    }
   
  }
  .page-title + div{
    padding: 44px 0 0;
  }
  
</style>

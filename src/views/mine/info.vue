<!-- Add "scoped" attribute to limit CSS to this component only -->

<template>
  <div class="container">
    <PublicTop :name="name" :back="true"></PublicTop>
    <div class="main">
      <div class="list">
        <div class="item flex"><img src="../../assets/images/mine/icon_jibenxinxi.png"/>基本信息<van-icon name="arrow" /></div>
        <div class="item flex"><img src="../../assets/images/mine/icon_xiugaimima.png"/>修改密码<van-icon name="arrow" /></div>
      </div>
      <div class="btn">退出登录</div>
    </div>
    
  </div>
</template>

<script>
import PublicTop from '../../components/publicTop/index'
export default {
  name: "mine",
  components:{
     PublicTop
  },
  data () {
    return {
      name: ''
    }
  },

  mounted () {
    this.name = this.$route.meta.title
  },
  methods: {
    
    
  },
};
</script>
<style scoped lang="scss">
.container {
  background: #F7F7F7;
  height: 100%;
  .main{
    padding-left: 10px;
    padding-right: 10px;
    .header{
      background: #FFF;
      border-radius: 5px;
      margin-top: 20px;
      align-items: center;
      padding: 15px;
      img{
        width: 60px;
        height: 60px;
        margin-right: 20px;
      }
      .right{
        p{
          color: #666;
          &:nth-of-type(1){
            margin-bottom: 10px;
            font-size: 18px;
            color: #333;
            font-weight: bold;
          }
          span{
            margin-left: 10px;
          }
        }
      }

    }
    .list{
      background: #FFF;
      border-radius: 5px;
      padding: 0 20px;
      margin-top: 15px;
      .item{
        align-items: center;
        border-bottom: 1px solid #EEEEEE;
        padding: 20px 0 ;
        &:last-of-type{
          border: none;
        }
        img{
          width: 24px;
          height: 24px;
          margin-right: 20px;
        }
        i{
          margin-left: auto;
          font-size: 17px;
        }
      }
    }
    .btn{
      background: #FFF;
      color: #EE6666;
      border-radius: 5px;
      height: 44px;
      line-height: 44px;
      font-size: 15px;
      text-align: center;
      margin-top: 20px;
    }
    
  }
  
      
      
}
</style>

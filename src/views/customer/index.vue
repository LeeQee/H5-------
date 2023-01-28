<!-- Add "scoped" attribute to limit CSS to this component only -->

<template>
    <div class="container">
        <PublicTop :name="name">
            <template v-slot:right>
                <img @click="handleAddCustomer" class="addicon" src="@/assets/images/hetong/icon_gengduocaozuo.png" />
            </template>
        </PublicTop>
        <div class="main">
            <!-- 头部检索区域 -->
            <div class="header flex">
                <div class="searchinput">
                    <van-field v-model="searchValue" placeholder="请输入客户姓名/手机/电话" />
                </div>
                <div class="searchbtn" @click="handleSearchCustomer">
                    <img src="@/assets/images/hetong/icon_gaojijiansuo.png" />
                </div>
            </div>
            <!-- 中间选项卡区域 -->
            <ul class="middle flex">
                <li @click="handleClickTab(1)" :key="1" :class="[activedTab===1?'activedtab':'defaulttab']">全部</li>   
                <li @click="handleClickTab(2)" :key="2" :class="[activedTab===2?'activedtab':'defaulttab']">我负责的</li>   
                <li @click="handleClickTab(3)" :key="3" :class="[activedTab===3?'activedtab':'defaulttab']">下属负责的</li>   
                <li @click="handleClickTab(4)" :key="4" :class="[activedTab===4?'activedtab':'defaulttab']">我参与的</li>   
            </ul>
            <!-- 用户列表区域 -->
            <ul class="userlist">
                <li class="defaultitem flex">
                    <img src="@/assets/images/kehu/icon_A.png" />
                    <div class="userinfo">
                        <p>北京经济管理职业学院</p>
                        <p>负责人：张澜</p>
                    </div>
                    <span @click="handleShowDetail" class="detailbtn">详情</span>
                </li>
                <li class="defaultitem flex">
                    <img src="@/assets/images/kehu/icon_A.png" />
                    <div class="userinfo">
                        <p>汉江师范学院</p>
                        <p>负责人：徐娅</p>
                    </div>
                    <span class="detailbtn">详情</span>
                </li>
                <li class="defaultitem flex">
                    <img src="@/assets/images/kehu/icon_A.png" />
                    <div class="userinfo">
                        <p>武汉铁路职业技术学院</p>
                        <p>负责人：陈少卿</p>
                    </div>
                    <span class="detailbtn">详情</span>
                </li>
                <li class="defaultitem flex">
                    <img src="@/assets/images/kehu/icon_B.png" />
                    <div class="userinfo">
                        <p>北京经济管理职业学院</p>
                        <p>负责人：张澜</p>
                    </div>
                    <span class="detailbtn">详情</span>
                </li>
                <li class="defaultitem flex">
                    <img src="@/assets/images/kehu/icon_C.png" />
                    <div class="userinfo">
                        <p>汉口学院</p>
                        <p>负责人：周全</p>
                    </div>
                    <span class="detailbtn">详情</span>
                </li>
                <li class="defaultitem flex">
                    <img src="@/assets/images/kehu/icon_C.png" />
                    <div class="userinfo">
                        <p>三峡大学</p>
                        <p>负责人：汪壮</p>
                    </div>
                    <span class="detailbtn">详情</span>
                </li>
                <li class="defaultitem flex">
                    <img src="@/assets/images/kehu/icon_D.png" />
                    <div class="userinfo">
                        <p>湖北警官学院</p>
                        <p>负责人：张澜</p>
                    </div>
                    <span class="detailbtn">杨冬</span>
                </li>
            </ul>
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
        name: '客户',
        searchValue:'',
        activedTab:1,
      }
    },
  
    mounted () {
    //   this.name = this.$route.meta.title
    },
    methods: {
        //   新增客户
        handleAddCustomer(){
            this.$router.push('/editCustomer')
        },
        //   搜索客户
        handleSearchCustomer(){
            this.$toast('搜索客户');
        },
        //   查看详情
        handleShowDetail(){
            this.$router.push('/customerDetail')
        },
        // 用户类型tab切换
        handleClickTab(val){
            this.activedTab=val;
            this.$toast('切换用户类型');
        },
    },
  };
  </script>
  <style scoped lang="scss">
  .container {
    background: #F7F7F7;
    height: 100%;
    .addicon{
        width: 16px;
        height: 16px;
    }
    .main{
    //   padding: 0 10px;
        padding-left: 10px;
        padding-right: 10px;
      .header{
        padding-top: 10px;
        justify-content: space-between;
        .searchinput{
            padding: 10px;
            display: flex;
            width: 300px;
            height: 45px;
            background: #ffffff;
            border-radius: 4px;
            box-shadow: 0px 0px 5px 0px rgba(101,157,237,0.10); 
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            overflow: hidden;
            &::before{
                content: '';
                width: 16px;
                height: 16px;
                background-image: url(../../assets/images/hetong/icon_search.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
                display: inline-block;
            }
        }
        .searchbtn{
            width: 45px;
            height: 45px;
            background: #ffffff;
            border-radius: 4px;
            box-shadow: 0px 0px 5px 0px rgba(101,157,237,0.10); 
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            overflow: hidden;
            img{
                width: 16px;
                height: 16px;
                display: inline-block;
                max-width: 16px;
                max-height: 16px;
                width: auto;
                height: auto;
            }
        }
      }
      .middle{
        margin: 17px 0;
        .activedtab{
            font-size: 18px;
            font-family: PingFang SC, PingFang SC-Bold;
            font-weight: 700;
            text-align: justifyLeft;
            color: #659ded;
            line-height: 30px;
            margin-right: 20.5px;
            cursor: pointer;
        }
        .defaulttab{
            font-size: 15px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            text-align: justifyLeft;
            color: #999999;
            line-height: 30px;
            margin-right: 20.5px;
            cursor: pointer;
        }
      }
      .userlist{
        
        width: 355px;
        height: 450px;
        background: #ffffff;
        border-radius: 4px;
        .defaultitem{
            // height: 64px;
            padding: 16px 12px 10px;
            border-bottom: 0.5px solid #eeeeee;;
            img{
                display: inline-block;
                width: 32px;
                height: 32px;
                margin-right: 12px;
            }
            .userinfo{
                font-family: PingFang SC, PingFang SC-Regular;
                text-align: justifyLeft;
                color: #666666;
                &:hover{
                    // border-bottom: 1px solid #dddd;
                    // border-top: 1px solid #dddd;
                }
                p:first-of-type{
                    font-size: 14px;
                    font-weight: 500;
                    color: #333333;
                    
                }
                p:last-of-type{
                    font-size: 12px;
                    font-weight: 400;
                    color: #666666;
                    line-height: 24px;
                }
            }
            .detailbtn{
                display: inline-block;
                font-size: 14px;
                font-family: PingFang SC, PingFang SC-Regular;
                font-weight: 400;
                text-align: justifyLeft;
                color: #659ded;
                line-height: 30px;
                cursor: pointer;
                margin-left: auto;
            }
        }
      }
      
    }
  }
  </style>
  
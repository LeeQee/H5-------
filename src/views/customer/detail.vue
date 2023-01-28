<!-- Add "scoped" attribute to limit CSS to this component only -->

<template>
    <div class="container graybg">
        <PublicTop :name="name">
            <template v-slot:left>
                <van-icon name="arrow-left" class="page-back" @click="toBack" />
            </template>
            <template v-slot:right>
                <img @click="handleOpenMoreOperations" class="addicon" src="@/assets/images/hetong/icon_gengduocaozuo.png" />
            </template>
        </PublicTop>
        <div class="main">
            <!-- 中间选项卡区域 -->
            <ul class="middle ">
                <li @click="handleClickTab(1)" :key="1" :class="[activedTab===1?'activedtab':'defaulttab']">基本信息</li>   
                <li @click="handleClickTab(2)" :key="2" :class="[activedTab===2?'activedtab':'defaulttab']">联系人</li>   
                <li @click="handleClickTab(3)" :key="3" :class="[activedTab===3?'activedtab':'defaulttab']">相关团队</li>   
                <li @click="handleClickTab(4)" :key="4" :class="[activedTab===4?'activedtab':'defaulttab']">商机</li>   
                <li @click="handleClickTab(5)" :key="5" :class="[activedTab===5?'activedtab':'defaulttab']">合同</li>   
                <li @click="handleClickTab(6)" :key="6" :class="[activedTab===6?'activedtab':'defaulttab']">回款</li>   
            </ul>
            <!-- 用户信息区域 -->
            <div class="userinfo">
                <div class="item">
                    <span class="leftval">
                        客户名称
                    </span>
                    <span class="rightval">
                        中国矿业大学
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        手机
                    </span>
                    <span class="rightval">
                        18888888888
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        电话
                    </span>
                    <span class="rightval">
                        0516-8967453
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        购买产品
                    </span>
                    <span class="rightval">
                        电子书
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        试用产品
                    </span>
                    <span class="rightval">
                        纯碎理性的批判
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        客户级别
                    </span>
                    <span class="rightval">
                        A(重要客户)
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        网址
                    </span>
                    <span class="rightval">
                        http://www.baiodu.com
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        下次联系时间
                    </span>
                    <span class="rightval">
                        2099-12-31
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        备注
                    </span>
                    <span class="rightval">
                        请乘坐时光穿梭器
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        成交状态
                    </span>
                    <span class="rightval">
                        未成交
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        距进入公海客户天数
                    </span>
                    <span class="rightval">
                        72
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        最后跟进时间
                    </span>
                    <span class="rightval">
                        
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        最后跟进记录
                    </span>
                    <span class="rightval">
                        
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        更新时间
                    </span>
                    <span class="rightval">
                        2022-07-22 14:03:01
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        创建时间
                    </span>
                    <span class="rightval">
                        2022-07-22 14:03:01
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        负责人
                    </span>
                    <span class="rightval">
                        赫拉克利特
                    </span>
                </div>
                <div class="item">
                    <span class="leftval">
                        创建人
                    </span>
                    <span class="rightval">
                        康德
                    </span>
                </div>
            </div>
        </div>
        <!-- 更多操作 -->
        <div class="maskLayer" :style="{display:showFlag}">
            <div class="popup">
                <div class="content">
                    <ul>
                        <li @click="handleTransfer">
                            <img src="@/assets/images/hetong/icon_zhuanyi.png" />
                            <span>转移</span>
                        </li>
                        <li @click="handleEdit">
                            <img src="@/assets/images/hetong/icon_bianji.png" />
                            <span>编辑</span>
                        </li>
                        <li @click="handleJoinSea">
                            <img src="@/assets/images/kehu/icon_fangrugonghai.png" />
                            <span>放入公海</span>
                        </li>
                        <li @click="handleChangeStatus">
                            <img src="@/assets/images/kehu/icon_genggaichengjiaozhuangtai.png" />
                            <span>更改成交状态</span>
                        </li>
                        <li @click="handleDelete">
                            <img src="@/assets/images/hetong/icon_shanchu.png" />
                            <span>删除</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import PublicTop from '../../components/publicTop/index'
  export default {
    name: "detail",
    components:{
       PublicTop
    },
    data () {
      return {
        name: '详情',
        activedTab:1,
        showFlag:'none',
      }
    },
  
    mounted () {
    //   this.name = this.$route.meta.title
        
    },
    methods: {
        toBack(){
            this.$router.go(-1)
        },
        // 用户类型tab切换
        handleClickTab(val){
            this.activedTab=val;
            this.$toast('切换类型');
        },
        // 打开更多操作
        handleOpenMoreOperations(){
            if(this.showFlag=='none'){
                this.showFlag='block';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                document.body.style.height = '100%';
                
            }else{
                this.showFlag='none'
                document.body.style.position = 'static';
                document.body.style.height = 'auto';
            }

        },
        // 打开更多操作
        handleCloseMoreOperations(){
            // this.$toast('关闭更多操作');
            this.showFlag='none';
            document.body.style.position = 'static';
            document.body.style.height = 'auto';
        },
        // 转移
        handleTransfer(){
            this.$toast('转移');
            this.handleCloseMoreOperations();
        },
        // 编辑
        handleEdit(){
            this.$toast('编辑');
            this.handleCloseMoreOperations();
        },
        // 放入公海
        handleJoinSea(){
            this.$toast('放入公海');
            this.handleCloseMoreOperations();
        },
        // 更改成交状态
        handleChangeStatus(){
            this.$toast('更改成交状态');
            this.handleCloseMoreOperations();
        },
        // 删除
        handleDelete(){
            this.$toast('删除');
            this.handleCloseMoreOperations();
        },
    },
  };
  </script>
  <style scoped lang="scss">
// body{
//     overflow: hidden;
// }
  .container {
    background: #F7F7F7;
    height: 100%;
    .addicon{
        width: 16px;
        height: 16px;
    }
    .main{
        padding-left: 10px;
        padding-right: 10px;
      .middle{
        margin: 17px 0;
        display: -webkit-inline-box;
        overflow-x: auto;
        width: 345px;
        &::-webkit-scrollbar{
            display: none;
        }
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
      .userinfo{
        width: 355px;
        // height: 789.5px;
        background: #ffffff;
        border-radius: 4px;
        padding-left: 12px;
        padding-right: 12px;
        .item{
            height: 45.5px;
            // padding-top: 16px;
            // padding-bottom: 16px;
            line-height: 45.5px;
            display: flex;
            justify-content: space-between;
            font-size: 15px;
            font-family: PingFang SC, PingFang SC-Medium;
            font-weight: 500;
            border-bottom: 0.5px solid #eeeeee;;
            .leftval{
                text-align: left;
                display: inline-block;
                color: #333333;
            }
            .rightval{
                text-align: right;
                display: inline-block;
                color: #666666;
            }
        }
      }
    }
    .maskLayer{
				width: 100%;
				height: 100%;
				background-color: rgba(0,0,0,.5);
				position: fixed;
				top: 0;
				left: 0;
				z-index: 99;
				// display: none;
			}
			.popup{
				z-index: 999;
				position: absolute;
				left: 99%;
				top: 76%;
				margin-top: -15rem;
				margin-left: -40%;
                .content{
                    // margin-top: 40px;
                    padding: 15px 20px;
                    // width: 150px;
                    // height: 205px;
                    background-color: #fff;
                    position: relative;
                    border-radius: 4px;
                    &::before{
                        content: '';
                        width: 0;
                        height: 0;
                        border: 10px solid;
                        position: absolute;
                        top: -20px;
                        left: 115px;
                        border-color:  transparent transparent #fff;
                        
                    }
                    &::after{
                        content: '';
                        width: 0;
                        height: 0;
                        border: 10px solid;
                        position: absolute;
                        top: -16px;
                        left: 115px;
                        border-color:  transparent transparent #fff;
                    }
                    ul>li{
                        // margin-bottom: 5px;
                        &:hover{
                            background-color: #f7f7f7;
                        }
                    }
                    ul>li>img,span{
                        display: inline-block;
                    }
                    ul>li>img{
                        vertical-align: middle;
                        width: 16px;
                        height: 16px;
                    }
                    ul>li>span{
                        line-height: 30px;
                        font-size: 14px;
                        font-family: PingFang SC, PingFang SC-Medium;
                        font-weight: 500;
                        text-align: justifyLeft;
                        color: #000000;
                    }
                }
			}
  }
  </style>
  
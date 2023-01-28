<!-- Add "scoped" attribute to limit CSS to this component only -->

<template>
    <div class="container">
        <PublicTop :name="name">
            <template v-slot:left>
                <van-icon name="arrow-left" class="page-back" @click="toBack" />
            </template>
        </PublicTop>
        <div class="main">
            <div class="formcontent">
                <div class="formitem">
                    <span>客户名称<span>*</span></span>
                    <van-field v-model="form.name" placeholder="请输入客户名称" />
                    <div class="bottomline"></div>
                </div>
                <div class="formitem">
                    <span>手机</span>
                    <van-field v-model="form.mobile" placeholder="请输入手机号" />
                    <div class="bottomline"></div>
                </div>
                <div class="formitem">
                    <span>电话</span>
                    <van-field v-model="form.tel" placeholder="请输入电话" />
                    <div class="bottomline"></div>
                </div>
                <div class="formitem">
                    <span>购买产品</span>
                    <van-field readonly v-model="form.product" @click="hanleSelect('productShow')" placeholder="请选择" is-link />
                    <van-popup position="bottom" v-model="productShow" get-container="body">
                        <van-picker
                            show-toolbar
                            title="购买产品"
                            :columns="productList"
                            @cancel="onCancel('productShow')"
                            @confirm="(value, index)=>onConfirm(value, index,'productShow','product')"
                        />
                    </van-popup>
                    <div class="bottomline"></div>
                </div>
                <div class="formitem">
                    <span>试用产品</span>
                    <van-field readonly v-model="form.trail" @click="hanleSelect('trailShow')" placeholder="请选择" is-link />
                    <van-popup position="bottom" v-model="trailShow" get-container="body">
                        <van-picker
                            show-toolbar
                            title="试用产品"
                            :columns="trailList"
                            @cancel="onCancel('trailShow')"
                            @confirm="(value, index)=>onConfirm(value, index,'trailShow','trail')"
                        />
                    </van-popup>
                    <div class="bottomline"></div>
                </div>
                <div class="formitem">
                    <span>客户级别</span>
                    <van-field readonly v-model="form.level" @click="hanleSelect('levelShow')" placeholder="请选择" is-link />
                    <van-popup position="bottom" v-model="levelShow" get-container="body">
                        <van-picker
                            show-toolbar
                            title="客户级别"
                            :columns="levelList"
                            @cancel="onCancel('levelShow')"
                            @confirm="(value, index)=>onConfirm(value, index,'levelShow','level')"
                        />
                    </van-popup>
                    <div class="bottomline"></div>
                </div>
                <div class="formitem">
                    <span>网址</span>
                    <van-field v-model="form.url" placeholder="请输入网址" />
                    <div class="bottomline"></div>
                </div>
                <div class="formitem">
                    <span>下次联系时间</span>
                    <van-field left-icon="calender-o"  readonly v-model="form.nextContactTime" @click="hanleSelect('contactTimeShow')" placeholder="请选择下次联系时间" />
                    <van-popup position="bottom" v-model="contactTimeShow" get-container="body">
                        <van-datetime-picker
                            title="下次联系时间"
                            type="datetime"
                            v-model="currentDate"
                            @cancel="onCancel('contactTimeShow')"
                            @confirm="(value, index)=>onConfirm(value, index,'contactTimeShow','nextContactTime')"
                        />
                    </van-popup>
                    <div class="bottomline"></div>
                </div>
            </div>
            
        </div>
      
    </div>
  </template>
  
  <script>
  import PublicTop from '../../components/publicTop/index'
  export default {
    name: "edit",
    components:{
       PublicTop
    },
    data () {
      return {
        name: '新建客户',
        form:{
            name:'',
            mobile:'',
            tel:'',
            product:'',
            trail:'',
            level:'',
            url:'',
            nextContactTime:'',
        },
        currentDate:new Date(),
        productShow: false,
        trailShow:false,
        levelShow:false,
        contactTimeShow:false,
        productList: ['中科', '化工出版社', '智慧养殖', '多元数目数据库', '论文管理'],
        trailList:['中科', '化工出版社', '智慧养殖', '多元数目数据库', '论文管理'],
        levelList: ['A(重要客户)', 'B(普通客户)', 'C(低价值客户)', 'D(中间商)'],
        
      }
    },
    computed:{
        contactTimeConfig:function(){
            let minDate=new Date();
            let maxDate = new Date(2019, 1, 1,0,0);
            return {
                minDate,maxDate,currentDate: minDate,
            }
        }
    },
    mounted () {
    //   this.name = this.$route.meta.title
    },
    methods: {
        onConfirm(value, index,type,param) {
            debugger
            console.log(value, index,type)
            this[type]=false;
            this.form[param] = value
            // this.$toast(`当前值：${value}, 当前索引：${index}`);
        },
        onCancel(val) {
            this[val]=false;
        },
        toBack(){
            this.$router.go(-1)
        },
        //   选择
        hanleSelect(val){
            this[val]=true;
            
        },
        //   搜索客户
        handleSearchCustomer(){
            this.$toast('搜索客户');
        },
    },
  };
  </script>
  <style scoped lang="scss">
    .van-cell{
        color:#969799;
    }
  .container {
    background: #F7F7F7;
    height: 100%;
    padding-top: 68px;
    .main{
        background: #fff;
        margin-left: 10px;
        margin-right: 10px;
        padding-top: 0px;
        .formcontent{
            padding-top: 16px;
            .formitem{
                
                >span{
                    display: block;
                    margin-left:16px;
                    font-size: 15px;
                    font-family: PingFang SC, PingFang SC-Medium;
                    font-weight: 600;
                    text-align: justifyLeft;
                    color: #333333;
                    >span{
                        color:#EE5555;
                    }
                }
                .bottomline{
                    margin-left:16px;
                    margin-bottom:16px;
                    width: 331px;
                    height: 0.5px;
                    background: #eeeeee;
                }
            }
        }
    }
  }
  </style>
  
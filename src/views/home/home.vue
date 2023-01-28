
<template>
  <div>
    <div class="container">
      <!-- 个人信息 -->
      <div class="cycontent">
        <div class="top">
          <el-select v-model="timevalue" placeholder="本年">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <button data-v-f981e64c="" type="button" class="el-button check el-button--primary"><!----><i class="wukong wukong-check"></i><span>数据查重</span></button>
        </div>
        <div class="content">
          <div class="title">团队成员</div>
          <div v-for="(theme) in themeList" :key="theme.ruid">
            <span>{{item.realname}}</span>
            <span>{{item.img}}</span>
          </div>
        </div>
      </div>
      <!-- 功能入口 -->
      <div class="gncontent">
        <div class="title">功能入口</div>
        <div class="content">
          <div class="gnht"><img src="../../../static/images/home/img_hetong.png" /></div>
          <div class="gnxs"><img src="../../../static/images/home/img_xiansuo.png" /></div>
          <div class="gnsj"><img src="../../../static/images/home/img_shangji.png" /></div>
          <div class="gnhk"><img src="../../../static/images/home/img_huikuan.png" /></div>
          <div class="gncp"><img src="../../../static/images/home/img_chanpin.png" /></div>
          <div class="gndb"><img src="../../../static/images/home/img_daiban.png" /></div>
          <div class="gngh"><img src="../../../static/images/home/img_gonghai.png" /></div>
        </div>
      </div>
      <!-- 业绩指标 -->
      <div class="yjcontent">
        <div class="title">
          <span>业绩指标</span>
          <el-select v-model="yjvalue" placeholder="汇款金额">
            <el-option
              v-for="item in yjoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </div>
        <div class="content">
          <div id="charts1" class="charts_one" style="width:200px;height:200px"/>
        </div>
      </div>
      <!-- 销售简报 -->
      <div class="xscontent">
        <div class="title">销售简报</div>
        <div class="content">
          <div class="khnum"><p class="ltitle">新增客户</p><p class="xsnum">{{jbdata.customerCount? jbdata.customerCount : 0 }}</p></div>
          <div class="sjnum"><p class="ltitle">新增商机</p><p class="xsnum">{{jbdata.businessCount? jbdata.businessCount : 0 }}</p></div>
          <div class="htnum"><p class="ltitle">新增合同</p><p class="xsnum">{{jbdata.leadsCount? jbdata.leadsCount : 0 }}</p></div>
          <div class="khnum"><p class="ltitle">新增回款</p><p class="xsnum">{{jbdata.receivablesCount? jbdata.receivablesCount : 0 }}</p></div>
          <div class="sjnum"><p class="ltitle">新增联系人</p><p class="xsnum">{{jbdata.contactsCount? jbdata.contactsCount : 0 }}</p></div>
          <div class="htnum"><p class="ltitle">新增阶段变化的商机</p><p class="xsnum">{{jbdata.contractCount? jbdata.contractCount : 0 }}</p></div>
          <div class="htnum"><p class="ltitle">新增阶段跟进记录</p><p class="xsnum">{{jbdata.recordCount? jbdata.recordCount : 0 }}</p></div>
        </div>
      </div>
      <!-- 销售漏斗 -->
      <div class="xscontent1">
        <div class="title">销售漏斗</div>
        <div class="content">
          <div id="charts2" class="charts_two" style="width:100%;height:240px"/>
          <div class="xsbottom">
            <div class="ydnum">赢单： ￥{{Businessdata.sumYing? Businessdata.sumYing : 0 }}</div>
            <div class="sdnum">输单： ￥{{Businessdata.sumShu? Businessdata.sumShu : 0 }}</div>
          </div>
        </div>
      </div>
      <!-- 销售趋势 -->
      <div class="xscontent2">
        <div class="title">销售趋势</div>
        <div class="content">
          <div id="charts3" class="charts_three" style="width:100%;height:200px"/>
          <div class="xsbottom">
            <div><i class="htcolor"></i>合同金额</div>
            <div><i class="hkcolor"></i>回款金额</div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="navBtns">
        <router-link :to="{ name: 'home' }"  class="currentNav"><div class="home"><img src="../../../static/images/home/icon_yibiaopan_selected.png"/></div>仪表盘</router-link>
        <router-link :to="{ name: 'contacts'}" ><div class="contacts"><img src="../../../static/images/home/icon_lianxiren_default.png"/></div>联系人</router-link>
        <router-link :to="{ name: 'customer'}"><div class="customer"><img src="../../../static/images/home/icon_kehu_default.png"/></div>客户</router-link>
        <router-link :to="{ name: 'mypersonal'}"><div class="mypersonal"><img src="../../../static/images/home/icon_wode_default.png"/></div>我的</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {Button, Dialog, Popup, Icon, Field} from 'vant'
export default {
  name: 'home',
  components:{
     [Button.name]:Button,
     [Dialog.name]:Dialog,
     [Popup.name]:Popup,
     [Icon.name]:Icon,
     [Field.name]:Field,
  },
  data () {  
    return {
      themeList:[], 
      userId:'',
      options:[
        {
          value: '选项1',
          label: '本年'
        }, {
          value: '选项2',
          label: '本月'
        }
      ],
      yjoptions:[
        {
          value: '2',
          label: '回款金额'
        }, {
          value: '1',
          label: '合同金额'
        }
      ],
      timevalue:'',
      yjvalue:'',
      achievementMoneys:'',
      contractMoneys:'',
      receivablesMoneys:'',
      proportion:'',
      yjChart:null,
      ldChart:null,
      jbChart:null,
      xsyjdata:[],
      Businessdata:[],
      qstype:[],
      qscontractMoneys:[],
      qsreceivablesMoneys:[],
      customeruser:[],
      customerusernum:'',
      jbdata:'',
    }
  },
  mounted() {
    this.userdata();
  },
  methods: {
    //企业用户
    getCustomeruser(){
      let formdata = new FormData();
          formdata.append('pageType','0');
       this.$http({
        url: `/system/user/queryUserList`,
        method: "POST",
        data: formdata,
      }).then((res) => {
        if(res.code == 0){
          this.customeruser = res.data
          this.customerusernum = res.data.length
        }else{
          this.$toast(res.msg);
        }
       
      });
    },
    //获取用户信息
    userdata(){
       this.$http({
        url: `/system/user/queryLoginUser`,
        method: "POST",
      }).then((res) => {
        if(res.code == 0){
          this.userId = res.data.userId
          this.getyj();
          this.getxslddata();
          this.getxsld();
          this.getxsjb();
          this.getxsqs();
        }else{
          this.$toast(res.msg);
        }
       
      });
    },
    //业绩指标数据获取
    getyj() {
      let formdata = new FormData();
          formdata.append('userIds',this.userId);
          formdata.append('deptIds','');
          formdata.append('type','year');
          formdata.append('status','2');
      this.$http({
        url: `/Crm/Instrument/queryPerformance`,
        method: "POST",
        data: formdata,
      }).then((res) => {
        if(res.code == 0){
          if(res.data){
            this.achievementMoneys = res.data.achievementMoneys;//目标金额
            this.contractMoneys = res.data.contractMoneys;//合同金额
            this.receivablesMoneys = res.data.receivablesMoneys;//回款金额
            this.proportion = res.data.proportion;//百分比
          }
        }else{
          this.$toast(res.msg);
        }
      });
    },
    //销售漏斗获取
    getxsld() {
      let formdata = new FormData();
          formdata.append('userIds',this.userId);
          formdata.append('deptIds','');
          formdata.append('type','year');
          formdata.append('status','2');
      this.$http({
        url: `/CrmBusiness/queryBusinessStatusOptions`,
        method: "POST",
        data: formdata,
      }).then((res) => {
        if(res.code == 0){
          
        }else{
          this.$toast(res.msg);
        }
      });
    },
    //销售漏斗数据获取
     getxslddata() {
      this.$http({
        url: `/Crm/Instrument/queryBusiness`,
        method: "POST",
      }).then((res) => {
        if(res.code == 0){
          this.Businessdata=res.data.list
          this.xsldChart();
        }else{
          this.$toast(res.msg);
        }
      });
    },
    //销售简报数据获取
    getxsjb(){
       let formdata = new FormData();
          formdata.append('userIds',this.userId);
          formdata.append('deptIds','');
          formdata.append('type','year');
      this.$http({
        url: `/Crm/Instrument/queryBulletin`,
        method: "POST",
        data: formdata
      }).then((res) => {
        if(res.code == 0){
         this.jbdata = res.data
        }else{
          this.$toast(res.msg);
        }
      });
    },
    //销售趋势数据获取
    getxsqs(){
      let formdata = new FormData();
          formdata.append('userIds',this.userId);
          formdata.append('deptIds','');
          formdata.append('type','year');
      this.$http({
        url: `/Crm/Instrument/sellMonth`,
        method: "POST",
        data: formdata,
      }).then((res) => {
        if(res.code == 0){
          this.xsyjdata = res.data.list;
          this.xsyjdata.forEach(item => {
            this.qstype.push(item.type);
            this.qscontractMoneys.push(item.contractMoneys)
            this.qsreceivablesMoneys.push(item.receivablesMoneys)
          });
          this.qstype=JSON.stringify(this.qstype);
          this.qscontractMoneys=JSON.stringify(this.qscontractMoneys);
          this.qsreceivablesMoneys=JSON.stringify(this.qsreceivablesMoneys);

          this.xsqsChart();
        }else{
          this.$toast(res.msg);
        }
      });
    },
    //业绩指标
    yjzbChart() {
      this.yjChart = echarts.init(document.getElementById("charts1"));
      let option = {
        series: [
          {
            type: 'gauge',
            axisLine: {
              lineStyle: {
                width: 30,
                color: [
                  [0.3, '#67e0e3'],
                  [0.7, '#37a2da'],
                  [1, '#fd666d']
                ]
              }
            },
            pointer: {
              itemStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              distance: -30,
              length: 8,
              lineStyle: {
                color: '#fff',
                width: 2
              }
            },
            splitLine: {
              distance: -30,
              length: 30,
              lineStyle: {
                color: '#fff',
                width: 4
              }
            },
            axisLabel: {
              color: 'auto',
              distance: 40,
              fontSize: 20
            },
            detail: {
              valueAnimation: true,
              //formatter: '{value} km/h',
              color: 'auto'
            },
            data: [
              {
                value: this.proportion
              }
            ]
          }
        ]
      };
      this.yjChart.setOption(option);
    },
    //销售漏斗
    xsldChart() {
      this.ldChart = echarts.init(document.getElementById("charts2"));
      let ldoption = {
        color: [ new echarts.graphic.LinearGradient(0, 0, 0, 1 , [{
              offset: 0,
              color: '#E3D858'
          },
          {
              offset: 1,
              color: '#eae5a7'
          }]), new echarts.graphic.LinearGradient(0, 0, 0, 1 , [{
              offset: 0,
              color: '#91CC75'
          },
          {
              offset: 1,
              color: '#b1cca4'
          }]), new echarts.graphic.LinearGradient(0, 0, 0, 1 , [{
              offset: 0,
              color: '#74A7F0'
          },
          {
              offset: 1,
              color: '#bed3f0'
          }]), new echarts.graphic.LinearGradient(0, 0, 0, 1 , [{
              offset: 0,
              color: '#FECD51'
          },
          {
              offset: 1,
              color: '#fbe4a8'
          }]),new echarts.graphic.LinearGradient(0, 0, 0, 1 , [{
              offset: 0,
              color: '#EE6666'
          },
          {
              offset: 1,
              color: '#f4bbb0'
          }])
        ],
        series: [
          {
            name: 'Funnel',
            type: 'funnel',
            left: '1%',
            top: 15,
            bottom: 5,
            width: '100%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '90%',
            label: {
              show: true,
              position: 'inside',
              color:'#fff',
              fontSize:'12px',
            },
            data: [
              { value: 60, name: 'Visit' },
              { value: 40, name: 'Inquiry' },
              { value: 20, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' }
            ]
          }
        ]
      };
      this.ldChart.setOption(ldoption);
    },
    //销售趋势
    xsqsChart() {
      this.jbChart = echarts.init(document.getElementById("charts3"));
      let jboption = {
        xAxis: {
          type: 'category',
          data: this.qstype
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#188df0' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#83bff6' }
              ])
            },
            data: this.qscontractMoneys,
            type: 'bar',
            left: '10%',
            top: 5,
            bottom: 5,
            width: '100%',
          },{
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#ff7474' },
                { offset: 0.5, color: '#ff7474' },
                { offset: 1, color: '#fff' }
              ])
            },
            data: this.qsreceivablesMoneys,
            type: 'bar',
            left: '10%',
            top: 5,
            bottom: 5,
            width: '100%',
          }
        ]
      };
      this.jbChart.setOption(jboption);
      console.log(jboption)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  padding: 10px;
  margin:44px 0px 10px 0px;
  .title{
    font-size: 16px;
    font-weight: 700;
  }
  .cycontent{
    .top{
      margin: 20px 0px;
    }
    .content{
      width: 100%;
      height: 102px;
      background: #fff;
      border-radius: 4px;
      .title{
        font-size: 15px;
        font-weight: 500;
        padding:15px 11px;
      }
    }
  }
  .gncontent{
    .title{
      margin: 20px 0px 16px 0px;
    }
    .content{
      height: 80px;
      overflow-x: auto;
      white-space: nowrap;
      div{
        width: 80px;
        height: 60px;
        border-radius: 4px;
        color: #fff;
        font-size: 13px;
        color: #ffffff;
        line-height: 60px;
        margin-right: 12px;
        display: inline-block;
        img{
          width: 80px;
          height: 60px;
        }
      }
    }
  }
  .yjcontent{
    width: 100%;
    height: 324px;
    background: #ffffff;
    border-radius: 4px;
    margin-top: 15px;
    padding: 16px 12px;
  }
  .xscontent{
    .title{
      margin: 20px 0px 10px 0px;
    }
    .content{
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;
        div{
          width: 129px;
          height: 69.5px;
          background: #ffffff;
          border-radius: 4px;
          box-shadow: 0px 0px 5px 0px rgba(101,157,237,0.10); 
          display: inline-block;
          margin: 3px 7px 3px 0px;
          padding:14px;
          .ltitle{
            font-size: 13px;
            font-weight: 400;
            color: #333333;
          }
          .xsnum{
            font-size: 16px;
            font-weight: 800;
            color: #659ded;
            margin-top: 12px;
          }
        }
      }
  }
  .xscontent1{
    width: 100%;
    height: 307px;
    background: #ffffff;
    border-radius: 4px;
    padding: 16px 12px;
    margin-top: 20px;
    .title{
      height: 28px;
      line-height: 28px;
    }
    .xsbottom{
      font-size: 12px;
      font-weight: 400;
      color: #333333;
      line-height: 15px;
      margin-left:10px;
      display: flex;
      margin: 0px auto;
      padding:0px 50px;
      .ydnum{
        color:#659DED;
        text-align: left;
        flex: 1;
      }
      .sdnum{
        color: #EE6666;
        text-align: right;
        flex: 1;
      }
    }
  }
  .xscontent2{
    width: 100%;
    height: 283px;
    background: #ffffff;
    border-radius: 4px;
    padding: 16px 12px;
    margin-top: 20px;
    margin-bottom: 70px;
    .title{
      height: 28px;
      line-height: 28px;
    }
    .xsbottom{
      font-size: 12px;
      font-weight: 400;
      color: #333333;
      line-height: 15px;
      margin-left:10px;
      display: flex;
      width: 200px;
      margin: 0px auto;
      div{
        flex: 1;
        i{
          width: 8px;
          height: 8px;
          float: left;
          margin: 3px 10px;
        }
      }
    }
    .htcolor{
      background: #659DED;
    }
    .hkcolor{
      background: #EE6666;
    }
  }
}

.bottom{
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 53.5px;
  background: #ffffff;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.05); 
  padding-top: 13px;
  a{
    font-size: 10px;
  }
  .currentNav{
    color: #659DED;
  }
  .navBtns{
    display: flex;
    .router-link-active{
      text-align: center;
      flex: 1;
    }
    img{
      height: 18px;
      margin-bottom: 6px;
    }
  }
}

</style>


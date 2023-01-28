<template>
  <div id="app">
    <!-- <public-top></public-top> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <public-bottom></public-bottom> -->
  </div>
</template>

<script>
// import PublicTop from './components/publicTop/index.vue'
import PublicBottom from './components/publicBottom/index.vue'
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    // PublicTop,
    PublicBottom
  },
  mounted() {},
};
</script>

<style lang="scss">
#app {
    background: #F7F7F7;
    color: #353535;
    font-size: 15px;
    font-family: PingFang SC, PingFang SC-Medium;
    height: 100%;
}
.line1{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  line-height: 22px;
}

.line2{
    overflow:hidden;
  text-overflow:ellipsis;
  -webkit-line-clamp:2;
  /* -webkit-box-orient: vertical; */
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  display:-webkit-box;
  word-break: break-all;

}


</style>

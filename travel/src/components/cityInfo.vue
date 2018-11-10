<template>
    <div>
      <Top @text='gettext'/>    
      <div class="content">
          <div class="rest" v-show="rest.length>0">
            <div class="title clear"><h5 class="fl">搜索结果</h5></div>
            <ul class="citys">
              <li class="city" v-for="(item,i) in rest" :key='i' @click="send(item)">
                {{item}}
              </li>
            </ul>           
          </div>                       
          <HotCity></HotCity>
          <Allcity></Allcity>
      </div>      
    </div> 
</template>

<script>
import Top from "./cityInfo/Top";
import HotCity from "./cityInfo/HotCity";
import Allcity from "./cityInfo/Allcity";
import $ from "jquery";
export default {
  name: "cityInfo",
  components: { Top, HotCity, Allcity },
  data() {
    return {
      rest: [],
      citysdata: {},
      searchary: [],
    };
  },
  methods: {
    gettext(data) {  
      this.rest = [];
      if(!data){return false};
      let reg = new RegExp(data, "i");
      for (let i = 0; i < this.searchary.length; i++) {
        console.log(reg.test(this.searchary[i]));
        if (reg.test(this.searchary[i])) {
          this.rest.push(this.searchary[i]);
        }
      }
      if (this.rest.length == 0) {
        this.rest.push("无");
      }   
      $(window).scrollTop(0);
    },
    send(cityinfo) {
      console.log("发送" + cityinfo);
      this.$store.state.city = cityinfo;
      this.$router.back(-1);
    }
  },
    mounted() {
    const _this = this;
    this.$http.get("../../static/city.json").then(
      function(res) {
        _this.citysdata = res.data.data;
        console.log(_this.citysdata);
        for (const key in _this.citysdata.cities) {
          for (var i = 0; i < _this.citysdata.cities[key].length; i++) {
            _this.searchary.push(_this.citysdata.cities[key][i].name);
          }
        }
      },
      function() {
        console.log("请求失败处理");
      }
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerTop {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  background: #00bcd4;
}
.content {
  position: relative;
  top: 4.9rem;
}
/* .rest {
  position: absolute;
  width: 100%;
  top: 2px;
  z-index: 3;
  background: #fff;
  color: #000;
} */
.title {
  width: 100%;
  background: #eee;
}
.title h5 {
  padding-left: 0.4rem;
  font-weight: normal;
  line-height: 2rem;
  color: #666;
}
.city {
  border-bottom: 1px solid #ccc;
  text-align: left;
  text-indent: 0.5rem;
  font: 1rem/2.2rem "April";
  color: #333;
}
</style>

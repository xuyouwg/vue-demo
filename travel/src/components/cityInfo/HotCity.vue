<template>
  <div>      
      <div class="title clear"><h5 class="fl">当前城市</h5></div>
      <div class="cur"><span class="curCity" @click="send($store.state.city)">{{$store.state.city}}</span></div>
      <div class="title clear"><h5 class="fl">热门城市</h5></div>
      <ul class="hot">
        <li class="HotCity" v-for="(item,index) in hotcity" :key="index" @click="send(item.name)">
          {{item.name}}
        </li>
      </ul>     
  </div>
</template>

<script>
export default {
  name: "HotCity",
  data() {
    return {
      hotcity: [1],     
    };
  },
  methods: {    
    send(cityinfo) {
      console.log("发送" + cityinfo);
      this.$store.state.city = cityinfo;
      // this.$router.back(-1);
      this.$router.push("/");
      console.log(this.$router);
    }
  },
  mounted() {
    const _this = this;
     this.$http.get("../../../static/city.json").then(
      function(res) {
        _this.hotcity = res.data.data.hotCities;
      },
      function(err) {
        console.log("请求数据失败");
      }
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.cur {
  display: flex;
  justify-content: left;
}
.curCity {
  width: 25%;
  border: 1px solid #ccc;
  border-radius: 0.2rem;
  padding: 0.1rem;
  margin: 0.5rem;
  font: 1rem/1.4rem "April";
}
.hot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 93%;
}
.HotCity {
  width: 27%;
  border: 1px solid #ccc;
  border-radius: 0.2rem;
  padding: 0.1rem;
  margin: 0.5rem;
  font: 1rem/1.4rem "April";
}
.city_lists li {
  padding-left: 10px;
  border-top: 1px solid #ccc;
  line-height: 37px;
  font-size: 12px;
}
</style>

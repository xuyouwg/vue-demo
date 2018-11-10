<template>
  <div>
    <!-- 侧边导航 -->
    <nav id="nav">
      <span v-for="(item,key,index) in cities" :key="index" :class="key" @click="click(index)">
        {{key}}
      </span>
    </nav>
    <!-- 城市信息 -->
    <ol id="list">
      <li v-for="(item,key,index) in cities" :key="index">
        <div class="title clear"><h5 class="fl">{{key}}</h5></div>
        <ul class="citys">
          <li class="city" v-for="(i,index) in item" :key="index" @click.stop="send(i.name)">
            {{i.name}}
          </li>
        </ul> 
      </li>
    </ol>                
  </div>
</template>

<script>
export default {
  name: "Allcity",
  data() {
    return {
      cities: {},
      cur: ""
    };
  },
  methods: {
    click(index) {
      var arr = nav.children;
      for (let i = 0; i < arr.length; i++) {
        arr[i].className = "";
      }
      nav.children[index].className = "active";
      var top = list.children[index].offsetTop;
      document.documentElement.scrollTop = top;
    },
    send(cityinfo){
        console.log('发送'+cityinfo);
        this.$store.state.city = cityinfo;
        this.$router.back(-1);
    }
  },
  mounted() {
    const _this = this;
    this.$http.get("../../../static/city.json").then(
      function(res) {
        _this.cities = res.data.data.cities;
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
.active {
  color: coral;
}
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
nav {
  position: fixed;
  top: 5.8rem;
  right: 0.2rem;
  color: #00bcd4;
  z-index: 999;
}
nav span {
  display: block;
}
</style>

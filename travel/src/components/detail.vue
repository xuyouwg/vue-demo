<template>
  <div>
    <!-- 景区信息 -->
    <router-link class="back" to="/"></router-link>
    <img :src="details.bannerImg" alt="">
    <span class="sightName">{{details.sightName}}</span>
    <span class="showPic"></span>
    <ol id="list">
        <li v-for="(item,index) in details.categoryList" :key="index" @click="showToggle">
            <div class="title">
                <h5 class="ticket">{{item.title}}</h5>
            </div>
                <ul class="details" v-show="isShow">
                    <li class="detail" v-for="(i,index) in item.children" :key="index" @click.stop="showToggle1">
                        <div class="title"><h5 class="ticket">{{i.title}}</h5></div>
                        <ul class="details" v-show="isShow1">
                            <li class="detail" v-for="(ite,index) in i.children" :key="index">
                                <div class="title"><h5 class="ticket">{{ite.title}}</h5></div>
                            </li>
                        </ul>
                    </li>
                </ul> 
        </li>
    </ol>                      
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      details: {},
      isShow:false,
      isShow1:false
    };
  },
  methods: {
    showToggle:function(){
                this.isShow = !this.isShow;
			},
    showToggle1:function(){
				this.isShow1 = !this.isShow1
			},
  },
  mounted() {
    const _this = this;
    this.$http.get("../../../static/detail.json").then(
      function(res) {
        _this.details = res.data.data;
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
.back {
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
  width: 2rem;
  height: 2rem;
  background: url("../../static/images/back.png") no-repeat left center;
  background-size: 1.5rem;
}
.sightName {
  position: absolute;
  top: 11.3rem;
  left: 0.5rem;
  font-size: 0.5rem;
  color: #fff;
}
.showPic {
  position: absolute;
  top: 11.3rem;
  right: 0;
  width: 3rem;
  height: 1rem;
  border: none;
  border-radius: 0.9rem;
  background: url("../../static/images/showPic.png") no-repeat right center;
  background-size: 3rem;
}
.ticket {
  text-indent: 1.4rem;
  margin-left: 0.5rem;
  background: url("../../static/images/ticket.png") no-repeat left center;
  background-size: 1rem;
  text-align: left;
  color: #333;
  font: normal 1rem/2rem "微软雅黑";
}
.title { 
  border-bottom: 1px solid #ccc;
}
.detail {
  margin-left: 1rem;
}
</style>

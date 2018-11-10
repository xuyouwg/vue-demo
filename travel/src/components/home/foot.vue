<template>
  <div class="foot clear">
    <div class="title clear">
      <h5 class="fl">周末去哪儿</h5>
    </div>   
    <ul>
      <li v-for="(item,index) in data" :key="index">
        <img :src="item.imgSrc" alt="">
          <h4>{{item.title}}</h4>
          <p>{{item.info}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'foot',
  data(){
    return {
      data:''
    }
    },
  mounted() {
    const _this = this;
    axios.get('../../../static/data.json').then(function (res) {
      _this.data=res.data.foot;
    },function (err) {
      console.log('请求数据失败');     
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot{
  width:100%; 
}
.title{ 
  width:100%;
  background: #eee;
}
.title h5{ 
  padding-left: 0.4rem;
  font-weight: normal;
  line-height: 2rem; 
}
img{
  width:100%;
}
h4,p{
  padding-left:0.4rem; 
  text-align: left;
}
h4{
  font-weight: normal;
}
p{
  padding-top:0.3rem;
  padding-bottom:0.5rem;
  color:#ccc;
  font:0.4rem/1rem "微软雅黑";
}
</style>

<template>
  <div class="recom clear">
    <div class="title clear"><h5 class="fl">热销推荐</h5></div>   
    <ul>
      <li v-for="(item,index) in data" :key="index">
        <div class="info_left"><img :src="item.imgSrc" alt=""></div>
        <div class="info_right">
          <h4>{{item.title}}</h4>
          <p>{{item.info}}</p>
          <router-link class="detail fl" to="/detail">查看详情</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import router from '../../router';
import axios from "axios";
export default {
  name: 'recom',
  data(){
    return {
      data:''
    }
    },
  mounted() {
    const _this = this;
    axios.get('../../../static/data.json').then(function (res) {
      _this.data=res.data.recom;
    },function (err) {
      console.log('请求数据失败');     
    })
  },
}
</script>

<style scoped>
.recom{
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
.info_right{
  margin-left: 10px;
}
.detail{ 
  display: inline-block;
  padding: 0 0.7rem;  
  border-radius: 0.3rem;
  background: #ff9300;
  color: #fff;
  line-height: 1.5rem;
}
li{
  display: flex;
  padding:0.3rem;
  border-bottom:solid 0.1rem #eaeaea;
}
h4,p{ 
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

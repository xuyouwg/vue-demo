<template>
  <div>
    <header>
      <span>&lt;</span>
      <input type="search" placeholder="输入城市/景点/游玩主题"/>
      <router-link class="citys" to="./cityInfo">{{$store.state.city}}</router-link>
    </header>
  </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'Top'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  display: flex;
  justify-content:space-around;
  position:fixed;
  top:0;
  z-index: 99;
  width:100%;
  background: #00bcd4;
}
span {
  color: #fff;
  font: 1.4rem/2.1rem "April";
}
input {
  width: 70%;
  margin: 0.5rem 0;
  padding-left: 1.3rem;
  border-radius: 0.3rem;
  border: none;
  background: white url("../../../static/images/search.png") no-repeat 0.4rem center;
  background-size: 0.7rem;
  outline: none;
  line-height: 1.4rem;
}
input::-webkit-input-placeholder {
  color: #dacfcf;
  font-size: 0.5rem;
  text-align: left;
}
.citys {
  border: none;
  padding-right: 5%;
  white-space:nowrap; 
  text-overflow:ellipsis;
  color: #fff;
  font-size: 0.5rem;
  line-height: 2.5rem;
  background: url("../../../static/images/city.png") no-repeat right center;
}
</style>

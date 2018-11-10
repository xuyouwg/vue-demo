<template>
  <div>
    <header id="tops">
      <div class='heade'>
        <router-link class="back" to="/">&lt;</router-link>
        <h4 class="citys">城市选择</h4>
      </div>
      <input type="search" class="b" placeholder="输入城市名或拼音" v-model='text' @input="search"/>      
    </header>        
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    search() {
      const str = this.text.replace(/\s*/g,"")   
      if (str == "") {
        this.$emit("text", false);
      }else{
        this.$emit("text", str);
      }        
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  background: #00bcd4;
}
.heade {
  display: flex;
  justify-content: space-between;
}
.back {
  color: #fff;
  font: 2rem/2.1rem "April";
  padding-left: 0.5rem;
}
h4 {
  white-space: nowrap;
  color: #fff;
  font: normal 1rem/2.1rem "April";
  padding-right: 41%;
}
input {
  width: 95%;
  margin: 0.5rem;
  padding-left: 1.3rem;
  border-radius: 0.1rem;
  border: none;
  outline: none;
  line-height: 1.9rem;
}
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  position: relative;
  height: 40px;
  width: 40px;
  background: url("../../../static/images/close.svg") no-repeat center;
  background-size: 18px 18px;
}

.b {
  animation: show1 0.3s linear;
  /* background: #fff url(../../../static/images/enter.png) no-repeat right center;
  background-size: 30px; */
}
@keyframes show1 {
  from {
    width: 20%;
  }
  to {
    width: 96%;
  }
}
input::-webkit-input-placeholder {
  font-size: 0.9rem;
  text-align: center;
}
</style>

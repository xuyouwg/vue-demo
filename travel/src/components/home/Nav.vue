<template>
<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <ul>
                <li v-for="(item,index) in arr" :key="index">
                  <a class="navs" href="#">
                    <img :src="item.imgSrc" alt="">
                    <span>{{item.title}}</span>
                  </a>                
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul>
                <li v-for="(item,index) in arr1" :key="index">
                  <a class="navs" href="#">
                    <img :src="item.imgSrc" alt="">
                    <span>{{item.title}}</span>
                  </a>                
                </li>
              </ul>
            </div>
            
        </div>
        
        <div class="swiper-pagination"></div>
</div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: "Nav",
  data() {
    return {
      arr: [
        {
          imgSrc: "../../static/images/index_06.png",
          title: "景点门票"
        },
        {
          imgSrc: "../../static/images/index_08.png",
          title: "滑雪季"
        },
        {
          imgSrc: "../../static/images/index_10.png",
          title: "泡温泉"
        },
        {
          imgSrc: "../../static/images/index_12.png",
          title: "动植园"
        },
        {
          imgSrc: "../../static/images/index_18.png",
          title: "游乐园"
        },
        {
          imgSrc: "../../static/images/index_19.png",
          title: "必游榜单"
        },
        {
          imgSrc: "../../static/images/index_20.png",
          title: "演出"
        },
        {
          imgSrc: "../static/images/index_21.png",
          title: "城市观光"
        }
      ],
      arr1: [
        {
          imgSrc: "../../static/images/index_18.png",
          title: "游乐园"
        },
        {
          imgSrc: "../../static/images/index_19.png",
          title: "必游榜单"
        },
        {
          imgSrc: "../../static/images/index_20.png",
          title: "演出"
        },
        {
          imgSrc: "../static/images/index_21.png",
          title: "城市观光"
        }
      ]
    };
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      loop: true,
      pagination: ".swiper-pagination",
      paginationClickable: true
    })
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
}
.navs {
  cursor: pointer;
  color: #333;
  font: 0.6rem/1rem "微软雅黑";
}
.navs img {
  width: 100%;
}
.swiper-slide ul li {
  width: 15%;
  margin: 0 3%;
  margin-bottom: 1rem;
}
</style>

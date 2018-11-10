<template>   
    <section class="banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of listarr" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Banner",
  data() {
    return {
      listarr: [],
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        autoplay: 1000,
        loop: true,
      }
    };
  },
  mounted() {
    axios.get("../../../static/index.json").then(req => {
      this.listarr = req.data.data.swiperList;
    });
  }
};
</script>

<style scoped>
</style>

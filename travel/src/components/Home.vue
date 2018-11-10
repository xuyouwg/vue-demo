<template>
    <div>
      <Top></Top>
      <div class="content">
        <Banner></Banner>
        <Nav></Nav>
        <recom></recom>
        <foot></foot>
      </div> 
    </div> 
</template>

<script>
import Top from "./home/Top";
import Banner from "./home/Banner";
import Nav from "./home/Nav";
import recom from "./home/recom";
import foot from "./home/foot";
export default {
  name: "Home",
  components: { Top, Banner,Nav,recom,foot }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  position: relative;
  top:2.53rem;
}
</style>

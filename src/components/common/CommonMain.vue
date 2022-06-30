<template>
  <div class="child_wrapper">
    <Header class="header"/>
    <Content class="content"/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Footer from "@/components/common/CommonFooter";
import Content from "@/components/common/CommonContent";
import Header from "@/components/common/CommonHeader";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "MainView",
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style scoped>

.header{
  grid-area: hd;
  width:100%;
  margin-top: 10px;
}
.content{
  grid-area: ct;
  margin-top: 10vh;
}
.footer{
  grid-area: ft;
  margin-top: 5vh;
  font-size: 0.7rem;
}

.child_wrapper {
  padding-left: 2vw;
  padding-right: 2vw;
  text-align: left;
  display: grid;
  grid-template-columns: auto;
  grid-auto-rows: auto;
  grid-template-areas:
    "hd"
    "ct"
    "ft"
}


</style>
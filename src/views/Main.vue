<style src="@/assets/fonts/boxicons.css"/>
<style src="@/assets/css/core.css"/>
<style src="@/assets/css/theme-default.css"/>
<style src="@/assets/css/demo.css"/>
<style src="@/assets/libs/perfect-scrollbar/perfect-scrollbar.css"/>

<template>
    <CommonMenu/>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
  <div class="layout-page" >
    <Header></Header>
    <div class="content-wrapper">
    <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
    </div>
  </div>
</template>

<script>

import CommonMenu from '@/components/common/CommonMenu';
import Header from "@/components/common/CommonHeader";
import Footer from "@/components/common/CommonFooter";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Main',
  components: {
    CommonMenu,
    Header,
    Footer
  },
  created: function () {
    this.$loadScript("./js/Helpers.js").then(() =>
        this.$loadScript("./js/config.js").then(() =>
            this.$loadScript("./js/menu.js").then(() =>
                this.$loadScript("./js/perfect-scrollbar.js").then(() =>
                    this.$loadScript("./js/main.js")
                )
            )
        )
  )
  }
}

</script>

<style scoped>


</style>

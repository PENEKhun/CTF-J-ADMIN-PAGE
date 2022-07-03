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
import {loadScript} from "vue-plugin-load-script";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Main',
  components: {
    CommonMenu,
    Header,
    Footer
  },
  mounted: function () {
    loadScript("/js/Helpers.js").then(() =>
        loadScript("/js/config.js").then(() =>
            loadScript("/js/perfect-scrollbar.js").then(() =>
                loadScript("/js/menu.js").then(() =>
                    loadScript("/js/main.js")
                )
            )
        )
  )
  }
}

</script>

<style scoped>


</style>

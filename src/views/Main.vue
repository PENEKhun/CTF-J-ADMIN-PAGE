<template>
  <div class="root_wrapper">
    <Menu class="menu"/>
    <router-view class="main_view"></router-view>
  </div>
</template>

<script>
import Menu from '@/components/common/CommonMenu';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Main',
  components: {
    Menu,
  },
  props: {
    msg: String
  }
}

</script>

<style scoped>

.main_view{
  padding-top:3vh;
  grid-area: main;
}
.menu{
  grid-area: sd;
}

.root_wrapper {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  grid-template-areas:
      "sd main"
      "sd main"
      "sd main"
      /*"sd sd sd main main main main main main"*/
      /*"sd sd sd main main main main main main"*/
      /*"sd sd sd main main main main main main"*/
}

</style>

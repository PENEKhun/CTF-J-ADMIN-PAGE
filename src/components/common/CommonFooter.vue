<template>
    <footer class="content-footer footer bg-footer-theme">
      <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div class="mb-2 mb-md-0">
          ©
          {{ new Date().getFullYear() }}
          , This web templates️ by
          <a href="https://themeselection.com" target="_blank" class="footer-link fw-bolder">ThemeSelection</a>
          <p>and the Others, Developed with ♥ by <a class="penek">PENEK</a>, hun</p>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>

<style scoped>

.penek{
  font-weight: bold;
  text-decoration: none;
  text-underline: none;
  color:#009933;
}



</style>
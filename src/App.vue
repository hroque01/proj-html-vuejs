<script>
import AppNavBar from './components/AppNavBar.vue';
import AppJumbotronVue from './components/AppJumbotron.vue';
import AppServicesVue from './components/AppServices.vue';
import AppSkilledVue from './components/AppSkilled.vue';
import AppBrandsVue from './components/AppBrands.vue';
import AppNavFooterVue from './components/AppNavFooter.vue';
import AppFooterVue from './components/AppFooter.vue';

export default {
  name: "App",
  components: {
    AppNavBar,
    AppJumbotronVue,
    AppServicesVue,
    AppSkilledVue,
    AppBrandsVue,
    AppNavFooterVue,
    AppFooterVue
  }
}
</script>

<template>
  <header>
    <AppNavBar /> <!-- non contiene la classe container-larger-->
  </header>
  <AppJumbotronVue /> <!-- non contiene la classe container-larger-->
  <main>
    <AppServicesVue />
    <AppSkilledVue /> <!-- modificato il padding in container-larger-->
    <AppBrandsVue />
  </main>
  <footer>
    <AppNavFooterVue />
    <AppFooterVue />
  </footer>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;

header {
  background-image: url("/header-bg.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-color: $color-bg;
}

footer {
  position: relative;
  background-image: url("/footer-bg-1.svg");
  background-repeat: no-repeat;
  background-color: #0f1164;
  background-size: cover;
  background-position: center;
}
</style>

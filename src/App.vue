<script>
import AppNavBar from './components/AppNavBar.vue';
import AppJumbotronVue from './components/AppJumbotron.vue';
import AppServicesVue from './components/AppServices.vue';
import AppSkilledVue from './components/AppSkilled.vue';
import AppBrandsVue from './components/AppBrands.vue';

export default {
  name: "App",
  components: {
    AppNavBar,
    AppJumbotronVue,
    AppServicesVue,
    AppSkilledVue,
    AppBrandsVue,
  }
}
</script>

<template>
  <header>
    <AppNavBar />
  </header>
  <main>
    <AppJumbotronVue />
    <AppServicesVue />
    <AppSkilledVue />
    <AppBrandsVue />
  </main>
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
</style>

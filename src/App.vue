<script>
import AppHeaderVue from './components/AppHeader.vue';
import AppJumbotronVue from './components/AppJumbotron.vue';
import AppServicesVue from './components/AppServices.vue';
import AppSkilledVue from './components/AppSkilled.vue';

export default {
  name: "App",
  components: {
    AppHeaderVue,
    AppJumbotronVue,
    AppServicesVue,
    AppSkilledVue,
  }
}
</script>

<template>
  <header>
    <AppHeaderVue />
  </header>
  <main>
    <AppJumbotronVue />
    <AppServicesVue />
    <AppSkilledVue />
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

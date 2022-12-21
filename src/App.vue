<script>
import AppHeaderVue from './components/AppHeader.vue';
import AppJumbotronVue from './components/AppJumbotron.vue';

export default {
  name: "App",
  components: {
    AppHeaderVue,
    AppJumbotronVue,
  }
}
</script>

<template>
  <header>
    <AppHeaderVue />
  </header>
  <main>
    <AppJumbotronVue />
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

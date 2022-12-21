<script>
import AppHeaderVue from './components/AppHeader.vue';

export default {
  name: "App",
  components: {
    AppHeaderVue,
  }
}
</script>

<template>
  <header>
    <AppHeaderVue />
  </header>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;

header {
  background-color: $color-bg;
}
</style>

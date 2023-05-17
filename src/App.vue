<script setup lang="ts">
import TestBootstrap from './components/TestBootstrap.vue'
</script>

<template>

  <main>
    <TestBootstrap msg="Hi there" />
  </main>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";
@import "bootstrap-vue/dist/bootstrap-vue.css";

main {
  width: 75vw;
}


</style>

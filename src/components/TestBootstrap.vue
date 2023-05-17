<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <b-card :title="msg">
    <p>This is a sample component using Bootstrap-vue</p>
    <b-progress value="50" max="100" show-progress animated></b-progress>
  </b-card>
</template>

<style lang="scss">
</style>
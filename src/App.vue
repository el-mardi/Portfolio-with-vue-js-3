<template>
  <navBar/>
  <router-view />
</template>

<script>
import navBar from '@/views/navBar.vue'

export default {
  components: {
    navBar
  }
}
</script>

<style>
@import './assets/global.css';
</style>

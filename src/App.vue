<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';


@Component({
  name: 'app',
  metaInfo: {
    title: 'web-app-without-cucumber',
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  @import "@/assets/scss/index";
</style>

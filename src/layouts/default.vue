<template>
  <fragment>
    <div class="app-layout-default">
      <slot />
    </div>
  </fragment>
</template>

<script lang="ts">
import { Fragment } from 'vue-fragment';
import {
  Component,
  Vue,
} from 'vue-property-decorator';


@Component({
  name: 'layout-default',
  components: {
    Fragment,
  },
})
export default class LayoutDefault extends Vue {}
</script>

import Vue, {
  CreateElement,
  VNode,
} from 'vue';
import VueMeta from 'vue-meta';
import SpacetabsVueComponents from '@spacetabs/vue-components/src';

import App from '@/App.vue';
import {
  router,
} from '@/plugins/vue-router';
import { declension } from '@/utils/declension-helper';

import './plugins/vuex';
import './plugins/vuex-router-sync';
import store from './store';

Vue.use(VueMeta);
Vue.use(SpacetabsVueComponents);

Vue.filter('declension', declension);

Vue.config.productionTip = false;

// eslint-disable-next-line import/exports-last
export const app = new Vue({
  el: '#app',
  router,
  store,
  render: (h: CreateElement): VNode => h(App),
});

if (__stage !== 'prod') {
  window.$app = app;
}

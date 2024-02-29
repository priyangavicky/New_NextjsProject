import { createVuetify } from "vuetify"; 
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import { Popover } from "bootstrap/dist/js/bootstrap.js";
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world-merc.js';
import 'jsvectormap/dist/maps/world.js';
import 'jsvectormap/dist/css/jsvectormap.css';
import VueApexCharts from "../components/UI/apexcharts.vue";
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: false,
    components,
    directives,
    theme:{
      themes:{
        colors:{
          
        }
      }
    }
  });
  nuxt.vueApp.use(vuetify);
  nuxt.vueApp.use(PerfectScrollbar);
  nuxt.vueApp.component("jsVectorMap", jsVectorMap);
  nuxt.vueApp.component("apexchart", VueApexCharts);
  nuxt.vueApp.use(Vue3ColorPicker);
  nuxt.vueApp.provide("Popover", Popover);
});

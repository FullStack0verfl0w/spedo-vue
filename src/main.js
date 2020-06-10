import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faMapMarkerAlt,
  faTruck,
  faDollarSign,
  faRubleSign,
  faEuroSign,
  faShoppingCart,
  faSearch,
  faRedo,
} from '@fortawesome/free-solid-svg-icons';
import { faSadTear } from "@fortawesome/free-regular-svg-icons";
import { faFacebookSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueAwesomeSwiper from 'vue-awesome-swiper';

// import style
import 'swiper/css/swiper.css';

Vue.use(VueAwesomeSwiper);
library.add(
    faChevronLeft,
    faChevronRight,
    faChevronDown,
    faChevronUp,
    faTruck,
    faMapMarkerAlt,
    faDollarSign,
    faRubleSign,
    faEuroSign,
    faShoppingCart,
    faSadTear,
    faFacebookSquare,
    faTwitterSquare,
    faSearch,
    faRedo,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

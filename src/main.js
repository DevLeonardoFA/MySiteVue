import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";

import * as CoIcons from "oh-vue-icons/icons/co";
const Co = Object.values({ ...CoIcons });
addIcons(...Co);

createApp(App).component("v-icon", OhVueIcon).mount('#app')

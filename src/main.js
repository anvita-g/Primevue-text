import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';



import 'primevue/resources/themes/lara-light-indigo/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(PrimeVue);

app.component('InputText', InputText);

app.mount('#app')
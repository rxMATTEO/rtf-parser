import { createApp } from 'vue'
import './styles.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import 'primevue/resources/themes/lara-light-green/theme.css'

const app = createApp(App);
app.use(PrimeVue);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.mount('#app');
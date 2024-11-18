// Importing the createApp function from vue
import { createApp } from 'vue';
// Import state management library
import { createPinia } from 'pinia';
import './style.css';
// Import Vue component
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

// Initializing state management library
app.use(pinia);

// Mounting Vue component to 'app' id in index.html
app.mount('#app');

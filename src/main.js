// Importing the createApp function from vue
import { createApp } from 'vue';
import './style.css';
// Import Vue component
import App from './App.vue';

// Mounting Vue component to 'app' id in index.html
createApp(App).mount('#app');

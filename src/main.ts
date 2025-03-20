import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'

const app = createApp(App)
app.use(store)
app.use(router)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'

// Import any global CSS here if needed
// import './assets/main.css'

// Create Vue app instance
const app = createApp(App)

// Use plugins
app.use(store)
app.use(router)

// Mount app first to ensure fast initial load
app.mount('#app')

// Log mounting confirmation for debugging
console.log('Vue app mounted successfully')

// Register the service worker after the app has loaded
if ('serviceWorker' in navigator) {
  // Use window.requestIdleCallback or setTimeout to defer service worker registration
  const registerSW = () => {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope)
      })
      .catch((error) => {
        console.log('ServiceWorker registration failed: ', error)
      })
  }

  // If requestIdleCallback is supported, use it, otherwise fallback to setTimeout
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(registerSW, { timeout: 2000 })
  } else {
    // Wait a moment after initial load to register service worker
    setTimeout(registerSW, 2000)
  }
}

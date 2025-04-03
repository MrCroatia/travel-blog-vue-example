// vercel.js
// This file is used to ensure proper asset handling in Vercel deployments

export default function vercelAdapter() {
  return {
    name: 'vercel-adapter',

    // Ensure proper handling of client-side redirects
    configureServer(server) {
      return () => {
        server.middlewares.use((req, res, next) => {
          // Handle SPA routing for client-side redirects
          if (req.url.includes('.') && !req.url.startsWith('/assets/')) {
            // If not a known asset path, let Vite handle it
            next()
          } else if (!req.url.includes('.')) {
            // For routes without a file extension (likely a route), serve index.html
            req.url = '/'
            next()
          } else {
            next()
          }
        })
      }
    },

    configurePreviewServer(server) {
      return () => {
        server.middlewares.use((req, res, next) => {
          // Same behavior as prod server
          if (req.url.includes('.') && !req.url.startsWith('/assets/')) {
            next()
          } else if (!req.url.includes('.')) {
            req.url = '/'
            next()
          } else {
            next()
          }
        })
      }
    },

    // Fix SPA routing in build
    generateBundle(options, bundle) {
      // Ensure proper asset paths in the bundled JavaScript
      Object.keys(bundle).forEach((fileName) => {
        const file = bundle[fileName]
        if (file.type === 'chunk' && file.code) {
          // Replace references to ./assets with /assets
          file.code = file.code.replace(/\.\/assets\//g, '/assets/')
        }
      })
    },
  }
}

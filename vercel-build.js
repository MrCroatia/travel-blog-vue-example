import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'

// Copy index.html to 404.html in dist folder to handle client-side routing
try {
  const srcPath = join(process.cwd(), 'dist', 'index.html')
  const destPath = join(process.cwd(), 'dist', '404.html')

  // Create directory if it doesn't exist
  const destDir = dirname(destPath)
  if (!existsSync(destDir)) {
    mkdirSync(destDir, { recursive: true })
  }

  copyFileSync(srcPath, destPath)
  console.log('Successfully copied index.html to 404.html')

  // Copy _headers file to dist directory to ensure proper MIME types
  const headersSource = join(process.cwd(), 'public', '_headers')
  const headersDestination = join(process.cwd(), 'dist', '_headers')

  if (existsSync(headersSource)) {
    copyFileSync(headersSource, headersDestination)
    console.log('Successfully copied _headers to dist directory')
  } else {
    console.warn('_headers file not found in public directory')
  }
} catch (error) {
  console.error('Error during post-build process:', error)
}

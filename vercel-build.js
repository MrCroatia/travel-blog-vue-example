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
} catch (error) {
  console.error('Error during post-build process:', error)
}

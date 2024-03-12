// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [
        resolve(__dirname, 'src/index.js'),
        resolve(__dirname, 'src/wrappers/index.js')
      ],
      // entry: resolve(__dirname, 'src/index.js'),
      name: 'Composables',
      // // the proper extensions will be added
      fileName: (_, entryName) => `${entryName}.js`
    },

    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  },

  resolve: {
    alias: {
      src: '/src',
      types: '/src/types.d.ts'
    }
  }
})

// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        wrappers: resolve(__dirname, 'src/wrappers/index.js'),
        index: resolve(__dirname, 'src/composables/index.js')
      }
    },

    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        dir: 'lib',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  },

  plugins: [copy({
    targets: [
      {
        src: './src/types.d.ts',
        dest: 'lib/'
      }
    ],
    hook: 'writeBundle'
  })],

  resolve: {
    alias: {
      src: '/src',
      types: '/src/types.ts'
    }
  }
})

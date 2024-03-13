import { resolve } from 'path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/main.ts'),
        wrappers: resolve(__dirname, 'src/wrappers/index.ts')
      },

      formats: ['es']
    },

    rollupOptions: {
      external: ['vue'],

      output: {
        dir: 'lib',
        globals: {
          vue: 'Vue'
        }
      }
    }
  },

  plugins: [
    dts({
      outDir: 'lib'
    })
  ]
})

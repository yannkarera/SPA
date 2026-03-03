import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'


export default defineConfig({
  root: './src',
  publicDir: './public',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true,
},
  plugins: [
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
    }),
  ],
})
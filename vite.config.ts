import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid' // or solid-start/vite
import devtools from 'solid-devtools/vite'

export default defineConfig({
  plugins: [
    solid(),
    devtools({
      autoname: true, // e.g. enable autoname
    }),
  ],
})
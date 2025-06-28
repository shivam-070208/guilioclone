import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import glsl from 'vite-plugin-glsl';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
     glsl({
      // Optional settings:
      include: /\.(glsl|vs|fs|vert|frag)$/, // file extensions
      defaultExtension: 'glsl',
      warnDuplicatedImports: false,
      compress: false
    })
  ],
})

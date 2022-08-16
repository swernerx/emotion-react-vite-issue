import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  optimizeDeps: {
    // Tweak settings to work-around issue: https://github.com/vitejs/vite/issues/9705
    // include: ['hoist-non-react-statics'],
    // exclude: ['@emotion/react']
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react"
    })
  ]
})

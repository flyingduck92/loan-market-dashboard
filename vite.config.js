import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"
import million from 'million/compiler'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), million.vite({ auto: true })],
})

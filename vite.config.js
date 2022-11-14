import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'path'

// https://vitejs.dev/config/
// https://realfavicongenerator.net/
export default defineConfig({
	plugins: [react(), VitePWA({
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: 'Temperature Monitor Dashboard',
      short_name: 'Temp Monitor Dash',
      description: 'Dashboard to display information from temperature monitor devices',
      icons: [
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
      ],
      injectRegister: 'auto',
      registerType: 'autoUpdate'
    }
    
  })],
	publicDir: "./public",
	base: "tmdash",
	build: {
		outDir: "build",
		cssCodeSplit: true,
		sourcemap: false,
	},
});

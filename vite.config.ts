import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'
import { defineConfig, UserConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()] as UserConfig["plugins"],
  test: {
    environment: 'happy-dom',
    mockReset: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
})

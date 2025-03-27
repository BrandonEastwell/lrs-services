import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '');

  const config = {
    plugins: [
      react(),
      tailwindcss()
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: true
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './tests/react.test.setup.js',
    }
  };

  // Only add proxy in development
  if (mode === 'development') {
    config.server = {
      proxy: {
        "/api": {
          target: env.VITE_API_TARGET || "http://localhost:3000",
          changeOrigin: true,
          secure: false
        },
      },
    };
  }

  return config
})

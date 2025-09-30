import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: "/", // 👈 If app is at root (domain.com/)

  // 🔹 Force single React / ReactDOM instance
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },

  build: {
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('@mui')) return 'mui-vendor';
            return 'vendor';
          }
        },
      },
    },
  },

  // 🔹 Vite handles SPA fallback by default, no need for historyApiFallback
  server: {
    port: 5173, // change if needed
    open: true, // auto open browser
  },
});

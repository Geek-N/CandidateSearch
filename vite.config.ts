import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      'module-13-challenge-cwqz.onrender.com',
      'localhost',
    ],
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: [
      'module-13-challenge-cwqz.onrender.com',
      'localhost',
    ],
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/game-timer/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico',
        'spider.png',
        'decapitate.png',
        'sounds/click.wav',
        'sounds/small-click.wav',
        'sounds/hurry.mp3',
        'sounds/time-up.mp3',],
      manifest: {
        name: 'Игровой таймер',
        short_name: 'Таймер',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2196f3',
        icons: [
          {
            src: 'spider.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'decapitate.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});

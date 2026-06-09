// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jvdsouza.github.io',
  base: '/portfolio/',
  vite: {
    envPrefix: ['PUBLIC_', 'VITE_', 'PORTFOLIO_'],
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import eslint from 'vite-plugin-eslint';
import manifest from './manifest.json';

export default defineConfig({
  plugins: [react(), crx({ manifest }), eslint()],
});

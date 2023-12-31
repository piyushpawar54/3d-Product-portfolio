import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// ...

const isCodeSandbox =
  'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env;

export default {
  plugins: [react()],
  root: 'src/',
  publicDir: '../public/',
  base: './',
  server: {
    host: true,
    open: !isCodeSandbox, // Open if it's not a CodeSandbox
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  define: {
    'process.env': {},
  },
};

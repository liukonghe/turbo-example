import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/index.html',
    inject: 'body'
  },
  server: {
    port: 5173
  },
  output: {
    distPath: { root: 'build' },
    target: 'web'
  }
});



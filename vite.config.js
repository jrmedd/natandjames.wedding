import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact({
    babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: false,
              fileName: false,
              minify: true,
              transpileTemplateLiterals: false
            }
          ]
        ]
      }
})],
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    }
  }
});
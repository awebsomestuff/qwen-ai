// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://qwen-ai.com',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});

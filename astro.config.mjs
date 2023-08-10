import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://devmohamoud.github.io',
	base: '/devmohamoud',
	integrations: [mdx(), sitemap()],
});

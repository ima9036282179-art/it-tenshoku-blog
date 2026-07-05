import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 独自ドメイン取得後は site を 'https://あなたのドメイン' に変更し、base を '/' にしてください。
export default defineConfig({
  site: 'https://ima9036282179-art.github.io',
  base: '/it-tenshoku-blog',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        if (!item || !item.url) return item;
        const url = item.url;
        if (url.endsWith('/it-tenshoku-blog/') || url.endsWith('/it-tenshoku-blog')) {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        if (url.includes('/blog/')) return { ...item, priority: 0.8, changefreq: 'weekly' };
        if (url.includes('/tags/')) return { ...item, priority: 0.4, changefreq: 'weekly' };
        return { ...item, priority: 0.5, changefreq: 'monthly' };
      },
    }),
  ],
});

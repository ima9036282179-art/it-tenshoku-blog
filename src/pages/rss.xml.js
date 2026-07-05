import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sorted = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'エンジニア転職ナビ — ITエンジニアの転職を成功させる情報メディア',
    description: 'ITエンジニアの転職の進め方・タイミング・スキル・おすすめ転職エージェント比較を発信するメディアです。',
    site: context.site,
    items: sorted.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags ?? [],
    })),
    customData: `<language>ja</language>`,
  });
}

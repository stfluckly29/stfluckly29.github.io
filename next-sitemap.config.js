/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://stfluckly29.github.io',
  changefreq: 'daily',
  generateRobotsTxt: true,
  additionalPaths: async () => {
    const result = [];

    // required value only
    result.push({ loc: '/rss/atom.xml' });
    result.push({ loc: '/rss/feed.json' });
    result.push({ loc: '/rss/feed.xml' });

    return result;
  },
};

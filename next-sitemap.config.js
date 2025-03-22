/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.moskillnettingsolutions.com', // Your website URL
  generateRobotsTxt: true, // Generates robots.txt
  sitemapSize: 5000, // Prevents large sitemaps from breaking
  generateIndexSitemap: true, // Ensures all sitemaps are included in index
  outDir: 'public', // Ensures the sitemaps are placed in public folder
};

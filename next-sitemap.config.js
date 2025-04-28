// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://webwalebhai.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000, 
  changefreq: 'daily',
  priority: 0.7,
  trailingSlash: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

module.exports = config;

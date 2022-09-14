const { i18n } = require('./next-i18next.config');


module.exports = {
  i18n,
  generateBuildId: async () => {
    return '1.4.0'
  },
  async rewrites() {
    return [
      {
        source: '/index.html',
        destination: '/'
      },
      {
        source: '/projects.html',
        destination: '/projects'
      },
      {
        source: '/news.html',
        destination: '/news'
      },
      {
        source: '/contact.html',
        destination: '/contact'
      },
      {
        source: '/about-us.html',
        destination: '/about'
      },
      {
        source: '/index-en.html',
        destination: '/'
      },
      {
        source: '/projects-en.html',
        destination: '/projects'
      },
      {
        source: '/news-en.html',
        destination: '/news'
      },
      {
        source: '/contact-en.html',
        destination: '/contact'
      },
      {
        source: '/about-us-en.html',
        destination: '/about'
      }
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

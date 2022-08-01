const { i18n } = require('./next-i18next.config');


module.exports = {
  i18n,
  generateBuildId: async () => {
    return '1.2.0'
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

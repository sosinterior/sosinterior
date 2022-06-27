module.exports = {
  generateBuildId: async () => {
    return '1.1.0'
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

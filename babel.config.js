module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            assets: './src/assets',
            components: './src/components',
            config: './src/config',
            routes: './src/routes',
            screens: './src/screens',
            services: './src/services',
            utils: './src/utils'
          }
        }
      ]
    ]
  }
}

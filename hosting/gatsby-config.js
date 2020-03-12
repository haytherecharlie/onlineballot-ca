const path = require('path')
const config = require('./src/config/meta-data.json')

module.exports = {
  siteMetadata: config.metadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-use-dark-mode`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src/assets'),
        atoms: path.join(__dirname, 'src/atoms'),
        components: path.join(__dirname, 'src/components'),
        config: path.join(__dirname, 'src/config'),
        layouts: path.join(__dirname, 'src/layouts'),
        locale: path.join(__dirname, 'src/locale'),
        markdown: path.join(__dirname, 'src/markdown'),
        pages: path.join(__dirname, 'src/pages'),
        services: path.join(__dirname, 'src/services'),
        utils: path.join(__dirname, 'src/utils')
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: path.join(__dirname, 'src/locale'),
        ...config.locale
      }
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: './src/services/redux'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/src/assets/images/favicon.png`,
        ...config.manifest
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/
                    }
                  }
                }
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              }
            }
          }
        ]
      }
    }
  ]
}

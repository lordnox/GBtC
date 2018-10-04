
const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'God Bless the Child e.V.',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'God Bless the Child e.V.',
        short_name: 'God Bless the Child',
        start_url: '/',
        background_color: '#010D1C',
        theme_color: '#FFD900',
        display: 'minimal-ui',
        icon: 'src/images/GodBlessTheChildIcon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}

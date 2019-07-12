module.exports = {
    siteMetadata: {
      title: `JoySpot`,
    },
    plugins: [
      `gatsby-plugin-emotion`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: 'gatsby-plugin-svgr',
        options: {
          prettier: true,         // use prettier to format JS code output (default)
          svgo: true,             // use svgo to optimize SVGs (default)
        },
      },
    ],
  }

const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Alexandre Le Lain`,
    description: `Check out all of Alexandre Le Lain's projects on this website!`,
    author: `@a_lelain`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: path.resolve(__dirname, "src/components"),
          icons: path.resolve(__dirname, "src/components/Icons"),
          hooks: path.resolve(__dirname, "src/hooks"),
          translations: path.resolve(__dirname, "src/translations"),
          lodash: path.resolve(__dirname, "node_modules/lodash-es"),
          images: path.resolve(__dirname, "src/images"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `home`,
        short_name: `home`,
        start_url: `/`,
        icon: `src/images/profile.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

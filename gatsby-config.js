module.exports = {
  siteMetadata: {
    title: `SSAM`,
    description: `Este es el portafolio personal de Steven Sebastian Araujo Moran.`,
    author: `stevenaraujo98`,
    siteUrl: `https://www.stevenaraujo98.github.io`,
    nombresApellidos: `Steven Sebastian Araujo Moran`,
    repositorio: `https://www.github.com/stevenaraujo98`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stevenaraujo98`,
        short_name: `ssam98`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#663399`,
        display: `standalone`,
        colors: {
          primary: "tomato",
        },
        icon: `src/images/logo11.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
  
}

module.exports = {
  siteMetadata: {
    title: "Mojalab Logs",
    author: "Gasu",
    description: "A Gatsby.js V2 Starter based on Forty by HTML5 UP",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2000,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/mojalab.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

/* @flow */

module.exports = {
  siteMetadata: {
    title: ":-)",
    author: "9renpoto"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    }
  ]
}

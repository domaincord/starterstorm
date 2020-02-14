

module.exports = {
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-transformer-json`,
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            "excerpt_separator": `<!-- end -->`
          }
        },
        {
          resolve: "gatsby-source-graphql",
          options: {
            typeName: "WORDPRESS",
            fieldName: "wordpress",
            url: "https://cms.starterstorm.com/graphql",
          },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `src/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `data`,
              path: `src/data`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Starter Storm`,
              short_name: `StarterStorm`,
              start_url: `/`,
              background_color: `#F46912`,
              theme_color: `#FCB826`,
              display: `minimal-ui`,
              icon: `src/images/icon.png`
            },
        },
    ],
    developMiddleware: app => {
      app.use(
        "/.netlify/functions/",
        proxy({
          target: "http://localhost:9000",
          pathRewrite: {
            "/.netlify/functions/": "",
          },
        })
      );
    }
}
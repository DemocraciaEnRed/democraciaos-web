/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `DemocraciaOS - Herramientas para democratizar la democracia`,
        description: `Herramientas digitales para las democracias del siglo XXI. Traemos participación ciudadana para gobiernos e instituciones. Visitanos, conocenos. Hecho por Democracia en Red, para toda la humanidad`,
        author: `@DemocraciaEnRed`,
        url: `https://democraciaos.org`
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-intl`,
            options: {
              // language JSON resource path
              path: `${__dirname}/src/intl`,
              // supported language
              languages: [`es`, `en`],
              // language file path
              defaultLanguage: `es`,
              // option to redirect to `/ko` when connecting `/`
              redirect: true,
            },
        },
    ]
}

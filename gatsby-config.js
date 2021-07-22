module.exports = {
  siteMetadata: {
    title: `DemocraciaOS - Herramientas para democratizar la democracia`,
    description: `Herramientas digitales para las democracias del siglo XXI. Traemos participación ciudadana para gobiernos e instituciones. Visitanos, conocenos. Hecho por Democracia en Red, para toda la humanidad`,
    author: `@DemocraciaEnRed`,
    siteUrl: `https://democraciaos.org`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-160849560-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
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
  ],
};

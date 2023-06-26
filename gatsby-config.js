module.exports = {
  siteMetadata: {
    title: `DemocraciaOS`,
    description: `Herramientas de código abierto de participación ciudadana para gobiernos e instituciones.`,
    author: `@DemocraciaEnRed`,
    publisher: `@DemocraciaEnRed`,
    siteUrl: `https://www.democraciaos.org/`,
    robot: `all`
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
        redirect: false,
      },
    },
  ],
};

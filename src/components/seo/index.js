import React from "react";
import { string, object, arrayOf } from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from './assets/favicon.png'
import { useLocation } from '@reach/router';
import { useIntl } from "gatsby-plugin-intl"

const SEO = ({ description, lang, meta, title }) => {
    const { site } = useStaticQuery(
        graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
              siteUrl
            }
          }
        }
      `
    )

    const location = useLocation()
    const intl = useIntl()

    const metaDescription = description || site.siteMetadata.description;
    const webTitle = site.siteMetadata.title;
    const metaTitle = title || 'Democracia en Red';

    const metaLang = intl.formatMessage({id: 'metaLang'})
    const altLang = intl.formatMessage({id: 'altLang'})
    lang =  intl.formatMessage({id: 'lang'})
    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={webTitle}
            titleTemplate={`%s | ${metaTitle}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property:`og:type`,
                    content: `website`,
                },
                {
                    property: `og:url`,
                    content: `${site.siteMetadata.siteUrl}${location.pathname}`,
                },
                {
                    property: `og:site_name`,
                    content: `${site.siteMetadata.siteUrl}`
                },
                {
                    property: `og:image`,
                    content: `${site.siteMetadata.siteUrl}/democraciaos-sharer.jpg`,
                },
                {
                    property: `og:locale`,
                    content: `${metaLang}`
                },
                {
                    property: `og:locale:alternate`,
                    content: `${altLang}`
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: metaTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:url`,
                    content: `${site.siteMetadata.siteUrl}${location.pathname}`,
                },
                {
                    name: `twitter:image`,
                    content: `${site.siteMetadata.siteUrl}/democraciaos-sharer.jpg`,
                },
            ].concat(meta)}
        >
            <link rel="icon" type="image/png" href={favicon} />
            <link rel="canonical" href={site.siteMetadata.siteUrl}/>
            
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `es`,
    meta: [],
    description: ``,
    title: ``,
}

SEO.propTypes = {
    description: string,
    lang: string,
    meta: arrayOf(object),
    title: string,
}
export default SEO

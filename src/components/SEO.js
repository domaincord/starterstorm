import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title }) {
  const { dataJson } = useStaticQuery(
    graphql`
      {
        dataJson {
          siteMetadata {
            title
            slogan
            description
            siteUrl
            socialMedia {
              twitter
            }
          }
        }
      }
    `
  )

  const site = dataJson
  const metaDescription = description || site.siteMetadata.description
  const siteTitle = title || site.siteMetadata.title
  const slogan =
    siteTitle === site.siteMetadata.title
      ? site.siteMetadata.slogan
      : site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      titleTemplate={`%s | ${slogan}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.socialMedia.twitter,
        },
        {
          name: `twitter:title`,
          content: siteTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO

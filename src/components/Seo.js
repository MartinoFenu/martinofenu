import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, location, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          buildTime(formatString: "YYYY-MM-DD")
          siteMetadata {
            title
            description
            author
            siteUrl
            image
            logo
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;
  const url = site.siteMetadata.siteUrl;
  const siteTitle = title || site.siteMetadata.title;
  const defaultTitle = site.siteMetadata.title;
  const logo = site.siteMetadata.logo;
  const image = site.siteMetadata.image;

  const schema = [
    {
      '@context': "http://schema.org",
      '@type': "WebSite",
      "logo": logo,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      name: siteTitle,
      alternateName: defaultTitle,
      url,
      inLanguage: lang,
      mainEntityOfPage: url,
      description: metaDescription,
      author: {
        '@id': `${url}/#identity`,
      },
      creator: {
        '@id': `${url}/#creator`,
      },
      publisher: {
        '@id': `${url}/#creator`,
      },
      datePublished: '2019-01-26',
      dateModified: site.buildTime,
    }
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${defaultTitle}`}
      link={
        [
          {
            rel: `apple-touch-icon`,
            sizes: `180x180`,
            href: `/apple-touch-icon.png`
          },
          {
            rel: `icon`,
            type: `image/png`,
            sizes: `32x32`,
            href: `/favicon-32x32.png`
          },
          {
            rel: `icon`,
            type: `image/png`,
            sizes: `16x16`,
            href: `/favicon-16x16.png`
          }
        ].concat()}
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
          property: `og:image`,
          content: image,
        },
        {
          property: `og:image:alt`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `${url}${location}`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          property: `twitter:url`,
          content: `${url}${location}`,
        },
        {
          name: `twitter:title`,
          content: siteTitle,
        },
        {
          property: `twitter:image`,
          content: image,
        },
        {
          property: `twitter:image:alt`,
          content: metaDescription,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `msapplication-TileColor`,
          content: `#da532c`
        },
        {
          name: `msapplication-TileImage`,
          content: `${url}/favicons/mstile-144x144.png`
        },
        {
          name: `theme-color`,
          content: `#ffffff`
        }
      ].concat(meta)}
    >
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  link: [],
  meta: [],
  description: ``,
  location: ``
}

export default SEO

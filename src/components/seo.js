import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site, file } = useStaticQuery(
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
        file(relativePath: { eq: "ogimage.jpg" }) {
          publicURL
        }
      }
    `
  )

  const ogImage = file.publicURL

  const schemaOrgWebPage = {
    "@context": "https://schema.org",

    "@type": "ExerciseGym",

    name: "Formula One Gym",

    image:
      "https://images.prismic.io/formula1gym/aaed51bf-69a8-4d86-ace4-966ea70c04de_Incline-Bench-Press.jpg",

    url: "https://www.formulaonegym.co.uk/",

    telephone: "0115 950 5009",

    email: " enquiries@formulaonegym.co.uk",

    priceRange: "£",

    address: {
      "@type": "PostalAddress",

      streetAddress: "21 Victoria Street",

      addressLocality: "Nottingham",

      postalCode: "NG1 2EW",

      addressCountry: "GB",
    },

    geo: {
      "@type": "GeoCoordinates",

      latitude: 52.95345,

      longitude: -1.14585,
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",

        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],

        opens: "06:30",

        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",

        dayOfWeek: "Friday",

        opens: "06:30",

        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",

        dayOfWeek: ["Saturday", "Sunday"],

        opens: "09:00",

        closes: "18:00",
      },
    ],

    sameAs: [
      "https://www.facebook.com/Formula-One-Gym-161546613946894/",

      "https://www.instagram.com/formulaonegym/",

      "http://search.google.com/local/writereview?placeid=ChIJdXtvmdXDeUgR877Bo28YMYU",
    ],
  }

  //console.log(ogImage)

  return (
    <Helmet title={title}>
      <html lang={lang} />
      <meta name="description" content={description} />
      <meta name="image" content={ogImage} />
      <meta name="formula-one-gym" content="Formula One Gym" />
      {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
      {
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgWebPage)}
        </script>
      }
      <meta name="google-site-verification" content="vLX2rcNn-8W_ohMkF-Sz0cm3b55ElLDGertMCruaQnk" />
      {/* {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script> */}
    </Helmet>
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

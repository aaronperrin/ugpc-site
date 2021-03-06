/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Episodes = () => {
  const data = useStaticQuery(graphql`
    query MarkdownQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
              description
              youtube
            }
          }
        }
      }
    }`)

  return (
    <>
      data.allMarkdownRemark.edges.
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()},
          {` `}
          <a href="https://www.youtube.com/channel/UCWE38AKAXZUwIzEHVJsIh-g">Usguyz Podcast</a>
        </footer>
      </div>
    </>
  )
}

Episodes.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Episodes



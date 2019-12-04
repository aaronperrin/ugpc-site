/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from "react-bootstrap"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}>
        <Row>
          <Col>
            <Header siteTitle={data.site.siteMetadata.title} />
          </Col>
        </Row>
        <main>{children}</main>
        <Row>
          <Col>
            <footer>
              © {new Date().getFullYear()},
              {` `}
              <a href="https://www.facebook.com/Usguyzpodcast">Usguyz Podcast</a>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

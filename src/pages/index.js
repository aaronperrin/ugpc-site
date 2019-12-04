import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Accordion, Card, Container, Row, Col} from 'react-bootstrap'

const IndexPage = (
  {
    data: {
      allMarkdownRemark: { edges },
    },
  }
) => {
  const Episodes = edges
    .map(edge => {
      const a = edge.node.frontmatter.youtube.split("/")[3];
      return (
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey={edge.node.frontmatter.number} style={{textAlign:"left"}}>
            <h3>#{edge.node.frontmatter.number} {edge.node.frontmatter.title}</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={edge.node.frontmatter.number}>
            <Card.Body>
              <div>{edge.node.frontmatter.description}</div>
              <div>{edge.node.frontmatter.youtube}</div>
              <a
                href={edge.node.frontmatter.youtube}
                style={{
                  display:"inline-block",
                  overflow:"hidden",
                  background:"url(https://img.youtube.com/vi/" + a + "/1.jpg) no-repeat",
                  width:"170px",
                  height:"80px",
                }}>
              </a>
              <a
                href={edge.node.frontmatter.itunes}
                style={{
                  display:"inline-block",
                  overflow:"hidden",
                  background:"url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-11-29&kind=podcast) no-repeat",
                  width:"170px",
                  height:"45px",
                }}>
              </a>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      )
    }

    )

  return (
    <Layout>
      <SEO title="Home" />
      <Image />
      <hgroup>
        <h1>US GUYZ</h1>
        <h3>Podcast, Volume 1</h3>
      </hgroup>
      <Accordion>{Episodes}</Accordion>
    </Layout>
  )
}

export const pageQuery = graphql`query MyQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___number] }) {
    edges {
      node {
        frontmatter {
          number
          date
          title
          description
          youtube
          itunes
        }
      }
    }
  }
}`


export default IndexPage

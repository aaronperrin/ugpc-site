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
      const youtubeId = edge.node.frontmatter.youtube;
      const soundcloudId = edge.node.frontmatter.soundcloud;
      const itunesId = edge.node.frontmatter.itunes;
      return (
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey={edge.node.frontmatter.number} style={{textAlign:"left"}}>
            <h3>#{edge.node.frontmatter.number} {edge.node.frontmatter.title}</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={edge.node.frontmatter.number}>
            <Card.Body>
              <Row>
                <Col>
                  <p>
                    {edge.node.frontmatter.description}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <iframe
                    className="youtube-iframe"
                    title={"Watch on Youtube - " + edge.node.frontmatter.title}
                    src={"https://www.youtube.com/embed/" + youtubeId}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <iframe
                    className="soundcloud-iframe"
                    title={"Listen on Soundcloud - " + edge.node.frontmatter.title}
                    src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + soundcloudId + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <a
                    className="itunes-link"
                    href={"https://podcasts.apple.com/us/podcast/" + itunesId}
                  />
                </Col>
              </Row>
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
          soundcloud
        }
      }
    }
  }
}`


export default IndexPage

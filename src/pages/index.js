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
      const youtubeId = edge.node.frontmatter.youtube.split("/")[3];
      return (
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey={edge.node.frontmatter.number} style={{textAlign:"left"}}>
            <h3>#{edge.node.frontmatter.number} {edge.node.frontmatter.title}</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={edge.node.frontmatter.number}>
            <Card.Body>
              <Row>
                <Col>
                  {edge.node.frontmatter.description}
                </Col>
              </Row>
              <Row>
                <Col>
                  <iframe className="youtube-iframe" src={"https://www.youtube.com/embed/" + youtubeId}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <iframe width="300px;" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/645295365&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <a className="itunes-link" href={edge.node.frontmatter.itunes}/>
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
        }
      }
    }
  }
}`


export default IndexPage

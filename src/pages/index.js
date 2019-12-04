import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (
  {
    data: {
      allMarkdownRemark: { edges },
    },
  }
) => {
  const Episodes = edges
    .map(edge =>
      <article>
        <div>{edge.node.frontmatter.date}</div>
        <div>{edge.node.frontmatter.number}</div>
        <div>{edge.node.frontmatter.path}</div>
        <div>{edge.node.frontmatter.youtube}</div>
        <div>{edge.node.frontmatter.description}</div>
        <div>{edge.node.frontmatter.itunes}</div>
      </article>
    )

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <hgroup>
          <Image />
          <h1>US GUYZ</h1>
          <h2>Podcast, Volume 1</h2>
        </hgroup>
        <div>{Episodes}</div>
        <div id="toc_container">
          <p className="toc_title">Contents</p>
          <ul className="toc_list">
            <li><a href="https://youtu.be/M2VTjMu6iJA">55. Wooden Nickles</a></li>
            <li><a href="https://youtu.be/iYngGmYnI58">54. NEW ERA</a></li>
            <li><a href="https://youtu.be/x4RQ9nWsx84">53. The Uncoupling</a></li>
            <li><a href="https://youtu.be/mPYrg2Xgvfg">52. Freedom Aint Free</a></li>
            <li><a href="https://youtu.be/1o2IUVaL59s">51. Mister Roper</a></li>
            <li><a href="https://youtu.be/1vARs72POCI">50. SLUICE</a></li>
            <li><a href="https://youtu.be/e1x8GLWsLcw">49. Thagameiser</a></li>
            <li><a href="https://youtu.be/k696r0t4c4Y">48. Tire Champ</a></li>
            <li><a href="https://youtu.be/ULvxoGKdpKM">47. Lofus</a></li>
            <li><a href="https://youtu.be/lFZlOtOEip4">46. Skuzzy Bros</a></li>
            <li><a href="https://youtu.be/3ZmTD-V8FqE">45. The Real JC</a></li>
            <li><a href="https://youtu.be/su_Rn2rX2oA">44. Boogology</a></li>
            <li><a href="https://youtu.be/NYFLv-cNjH0">43. Shuckin</a></li>
            <li><a href="https://youtu.be/g7TdLDtCuFw">42. Wet Toes</a></li>
            <li><a href="https://youtu.be/RO2giMK3V7k">41. K you B!</a></li>
            <li><a href="https://youtu.be/n8egT8L9_2A">40. UFC Party</a></li>
            <li><a href="https://youtu.be/5HkE5OmSZXc">39. REX</a></li>
            <li><a href="https://youtu.be/M0p2SpgcSo8">38. Stung</a></li>
            <li><a href="https://youtu.be/RaxA3Qcm-hw">37. SpecialK10K</a></li>
            <li><a href="https://youtu.be/PRpX-YSgBog">36. Adulting</a></li>
            <li><a href="https://youtu.be/e2kVKuq0Cy4">35. Pickles Pads and Ports</a></li>
            <li><a href="https://youtu.be/t7QKLS-fYM8">34. Hot Dog Water</a></li>
            <li><a href="https://youtu.be/dIHE1c-ZMIw">33. Reptile Disfunction</a></li>
            <li><a href="https://youtu.be/UYW0UC43QKY">32. Bros Before Does</a></li>
            <li><a href="https://youtu.be/C1J6Ljnlx8Q">31. Spam Sweat</a></li>
            <li><a href="https://youtu.be/lv6ECEEoZkA">29.5 Spawns</a></li>
            <li><a href="https://youtu.be/4hCzK_jBTkI">29. Milk Rag</a></li>
            <li><a href="https://youtu.be/fZEaUwRtorQ">28. Invalids</a></li>
            <li><a href="https://youtu.be/eNWMBbQpeBg">27. Codger Magnet</a></li>
            <li><a href="https://youtu.be/OA_zJEtFoF0">26. Prune Tang</a></li>
            <li><a href="https://youtu.be/eH-lQ3dqJJY">25. Kaos Kris</a></li>
            <li><a href="https://youtu.be/C3ubfowN4K0">24. Horror Show</a></li>
            <li><a href="https://youtu.be/Gsf1RljhdKI">23. Park Ave</a></li>
            <li><a href="https://youtu.be/QGYwcHym0Zg">22. Brothers</a></li>
            <li><a href="https://youtu.be/CLN3ViB4eKI">21. Tic Cup</a></li>
            <li><a href="https://youtu.be/EPlEiA2_yh4">20. Big Red</a></li>
            <li><a href="https://youtu.be/R6iqWlRuYIY">19. Ramp Dust</a></li>
            <li><a href="https://youtu.be/B-Wja5IyOyQ">18. Read the Bones</a></li>

          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`query MyQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___number] }) {
    edges {
      node {
        frontmatter {
          number
          path
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

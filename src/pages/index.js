import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
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
          <li><a href="https://youtu.be/ULvxoGKdpKM">47. 'Lofus'</a></li>
          <li><a href="https://youtu.be/lFZlOtOEip4">46. Skuzzy Bros</a></li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage

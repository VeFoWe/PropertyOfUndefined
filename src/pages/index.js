import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TransitionLink from 'gatsby-plugin-transition-link'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Test</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>


    <TransitionLink
  to="/page-2"
  exit={{
    trigger: ({ exit, node }) => this.interestingExitAnimation(exit, node),
    length: 1
  }}
  entry={{
    delay: 0.6
  }}
>
  Go to page 2
</TransitionLink>

  </Layout>
)

export default IndexPage

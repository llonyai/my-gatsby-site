import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Balu 9">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Balu 9 éves"
        src="../images/Balu.jpg"
      />
    </Layout>
  )
}

export default IndexPage
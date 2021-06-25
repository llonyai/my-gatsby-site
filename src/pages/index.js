import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Balu 9. szülinapja">
      <p>Balu és Lobonc aszülinapi virslivel</p>
      <StaticImage
        alt="Balu 9. szülinapja"
        src="../images/Balu.jpg"
      />
    </Layout>
  )
}

export default IndexPage
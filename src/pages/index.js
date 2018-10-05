import React from 'react'
import Layout from '../components/layout'
import TeaserImage from '../components/teaser-image'
import { graphql } from 'gatsby'

export default ({ data }) => {
  console.log(data.file.childImageSharp.fixed.src)
  return (
    <Layout>
      <TeaserImage
        imageUrl={data.file.childImageSharp.fixed.src}
        alt="Konzert am 03.12.2018"
        url="/2018-12-03-concert"
        teaser="Neues Konzert!"
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "2018-12-03-concert/IMG_2006.jpg" }) {
      childImageSharp {
        fixed(width: 960, height: 500) {
          src
        }
      }
    }
  }
`

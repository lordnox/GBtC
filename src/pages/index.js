import React from 'react'
import Layout from '../components/layout'
import TeaserImage from '../components/teaser-image'
import { graphql } from 'gatsby'

export default ({ data }) => {
  return (
    <Layout>
      <div style={{
        fontSize: 48,
        textAlign: 'center',
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        Coming soon&hellip;
      </div>
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

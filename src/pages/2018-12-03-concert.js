import React from 'react'
import Layout from '../components/layout'
import Container  from '../components/container'
import FullWidthImage from '../components/full-width-image'
import { rhythm } from "../utils/typography"
import styled, { css } from "react-emotion"

const BoldParagraph = styled('p')`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: ${rhythm(.25)};
`

export default ({ data }) => (
  <Layout>
    <FullWidthImage
      imageUrl={data.file.childImageSharp.fixed.src}
      className={css`
        margin-bottom: ${rhythm(2)};
      `}
    />
    <Container>
      <h1>Coming soon &hellip;</h1>
      <h2>Gospel Benefizkonzert</h2>
      <p>
        Am 03.12.2018 ab findet in der City Church Hamburg, Michaelispassage 1, in Hamburg ein Charity Afro Gospel Konzert zugunsten der PHILA Primary School statt.
      </p>
      <p>
        Diese Schule liegt im Umlazi Township bei Durban, Südafrika und wir möchten diese Schule mit Unterrichtsausstattung und Schulkleidung für die Kinder unterstützen.
      </p>
      <p>
        Zu diesem Anlass hat sich eine Live Band mit 8 SängerInnen sowie 5 MusikerInnen zusammengefunden, hauptsächlich aus dem Hamburger Ensemble des Theaters im Hafen ( Der König der Löwen ).
      </p>
      <p>
        Diese Lionqueens - und Kings möchten mit diesem Konzert auf die Situation der Schule und den unterstützenden Verein, www.godblessthechild.wordpress.com aufmerksam machen.
      </p>
      <BoldParagraph>
        City Church Hamburg, Michaelispassage 1, 20459 Hamburg
      </BoldParagraph>
      <BoldParagraph>
        Montag, 03.12.2018
      </BoldParagraph>
      <BoldParagraph>
        Einlass ab 18h30, Konzertbeginn ab 19h
      </BoldParagraph>
      <BoldParagraph>
        Freier Eintritt, Spenden gern gesehen
      </BoldParagraph>
    </Container>
  </Layout>
)

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

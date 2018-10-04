import React from 'react'
import styled, { css } from "react-emotion"
import { Link } from 'gatsby'
import { primary, accent, additional } from '../theme/palette'

// className={css``}

const Button = styled(Link)`
  border: 2px solid ${primary.darker2};
  background: ${primary.normal};
  color: ${primary.darker2};
  padding: 4px;
  height: 48px;
`

const TeaserImage = ({ imageUrl, alt, url, teaser }) => (
  <article className={css`
    overflow: hidden;
  `}>
    <div className={css`
      background-image: url(${imageUrl});
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 500px;
    `}></div>
    <img src={imageUrl} alt={alt} className={css`
      min-height: 400px;
      visibility: hidden;
    `} />
    <div className={css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    `}>
      <h2 className={css`
        background: rgba(255, 255, 255, 0.7);
        padding: 30px;
        border-radius: 10px;
        text-align: center;
      `}>{teaser}</h2>
      <Button to={url}>
        <span>Read More</span>
      </Button>
    </div>
  </article>
)

export default TeaserImage

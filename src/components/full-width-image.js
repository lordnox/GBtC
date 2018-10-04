import React from 'react'
import { css } from "react-emotion"

const FullWidthImage = ({ className, imageUrl, ...props }) => <div className={css`
  background-image: url(${imageUrl});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 500px;
  ${className};
`} {...props} />

export default FullWidthImage

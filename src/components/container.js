import React from 'react'
import { Link } from 'gatsby'
import { css } from "react-emotion"
import { primary, accent, additional } from '../theme/palette'
import { rhythm } from "../utils/typography"

const Container = ({ children }) => <div
  className={css`
    max-width: 800px;
    margin: 0 auto;
  `}
  children={children}
/>


export default Container

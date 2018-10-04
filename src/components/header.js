import React from 'react'
import { Link } from 'gatsby'
import { css } from "react-emotion"
import { primary, accent, additional } from '../theme/palette'
import { rhythm } from "../utils/typography"

const Header = ({ siteTitle }) => (
  <div
    className={css`
      padding: ${rhythm(2)};
      text-align: center;
    `}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        className={css`
          text-decoration: none;
          font-weight: normal;
          color: ${additional.darker1};
        `}
      >
        <span
          className={css`
            font-weight: normal;
            color: ${additional.darker2};
          `}
        >{siteTitle.substr(0, 1)}</span>
        <span>{siteTitle.substr(1)}</span>
      </Link>
    </h1>
    <div
    >
    </div>
  </div>
)

export default Header

import React from "react"
import { Link } from "gatsby"
import * as style from "./footer.module.scss"

export const Footer = () => {
  return (
    <footer className={style.site_footer}>
      @2021 by <Link to="/">purity-ui.com</Link>
    </footer>
  )
}

/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import { NavBar } from "./navigation"

import "../assets/scss/style.scss"
import { Footer } from "./footer"
import { ThemeSwitcher } from "./themeSwitcher"
import Search from "../components/search"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
    siteSearchIndex {
      index
    }
  }
`

const Layout = ({ children, className, props }) => {
  const { site, siteSearchIndex } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className="primary-container">
      <Header>
        <Logo title={siteTitle} />
        <div sx={layoutStyle.nav}>
          <div sx={{ display: ["flex", "flex", "flex", "none"] }}>
            <Search searchIndex={siteSearchIndex.index} />
          </div>
          <NavBar />
        </div>
        <div sx={layoutStyle.appearance}>
          <Search searchIndex={siteSearchIndex.index} />
          <ThemeSwitcher />
        </div>
      </Header>
      <main className={"container" + (className ? " " + className : "")}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4
  }
}

/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import Header from "./header"

import "../assets/scss/style.scss"
import Footer from "./footer"

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

  return (
    <div className="primary-container">
      <Header />
      <main className={"container " + className}>
        <div className="main-max-width">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout

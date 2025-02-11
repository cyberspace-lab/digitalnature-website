/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 510, height: 271)
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  return (
    <Layout>
      <Seo />
      <h2 class="goals-title">{frontmatter.title}</h2>
      <div class="goals">
        <div class="goals-image">
            <img class="goals-img-border" src="/assets/ornaments/goals-img.svg"/>
            {Image ? (
            <GatsbyImage image={Image} alt={frontmatter.title + " - Featured image"} className="featured-image" />
            ) : (
              ""
            )}
        </div>
        <div class="goals-text">
            <img class="goals-text-border" src="/assets/ornaments/goals-text.svg"/>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    </div>
    </Layout>
  )
}

export default HomePage

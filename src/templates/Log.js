import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Log = (props) => {
    const { markdownRemark } = props.data
    const { html, frontmatter } = markdownRemark
    return (
        <Layout>
            <Helmet>
                <title>{frontmatter.title}</title>
                <meta name="description" content="Generic Page" />
            </Helmet>

            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>{frontmatter.title}</h1>
                            {
                              frontmatter.tags &&
                                <h1>
                                  {frontmatter.tags.map(tag => ' ' + tag + ' ')}
                                </h1>
                            }
                        </header>
                        <span className="image main">
                            <Img fluid={frontmatter.cover.childImageSharp.fluid} />
                        </span>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </section>
            </div>

        </Layout>
    )
}

export default Log

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        tags
        cover {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

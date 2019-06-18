import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { getDisplayAuthor } from '../utils'

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
                            {frontmatter.tags &&
                                <ul className="actions">
                                    {
                                        frontmatter.tags.map(tag =>
                                            <Link
                                              to={"/logs/" + tag}
                                              className="button special small"
                                            >
                                                {tag}
                                            </Link>
                                        )
                                    }
                                </ul>
                            }
                            <ul className="actions">
                              <li>著者 : {getDisplayAuthor(frontmatter.author)}</li>
                              <li>公開日 : {frontmatter.date}</li>
                            </ul>
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
        author
        title
        tags
        cover {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

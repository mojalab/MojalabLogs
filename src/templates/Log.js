import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { getDisplayAuthor } from '../utils'

const Log = (props) => {
    const { markdownRemark } = props.data
    const { html, frontmatter } = markdownRemark
    const path = "https://www.mojalab.site/" + frontmatter.path
    const imagePath = "https://www.mojalab.site" + frontmatter.cover.childImageSharp.fluid.src
    return (
        <Layout>
            <Helmet>
                <title>{frontmatter.title}</title>
                <meta name="description" content="Generic Page" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@moja_labo" />
                <meta property="og:url" content={path} />
                <meta property="og:title" content={frontmatter.title} />
                // <meta property="og:description" content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling." />
                <meta property="og:image" content={imagePath} />
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </Helmet>

            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <div className="title">{frontmatter.title}</div>
                            {frontmatter.tags &&
                                <ul className="actions">
                                    {
                                        frontmatter.tags.map(tag =>
                                            <Link
                                              key={tag}
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
                            <div>
                              <a
                                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                                className="twitter-share-button"
                                data-show-count="false"
                                data-size="large"
                              />
                            </div>
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

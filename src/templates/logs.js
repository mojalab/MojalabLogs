import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import { getDisplayTitle } from '../utils'

const getCover = (allLogs, path) => (
  allLogs.filter(({ node }) => node.frontmatter.path === path)
    .map(({ node }) => node.frontmatter.cover.childImageSharp.fluid)[0]
)


const Logs = (props) => {
  const prefix = props.pageContext.prefix
  const allLogs = props.data.allMarkdownRemark.edges
  return (
    <Layout>
        <Helmet>
            <title>{getDisplayTitle(prefix)} Logs</title>
            <meta name="description" content="Logs Page" />
        </Helmet>

        <BannerLanding prefix={prefix}/>

        <div id="main">
            <section className="spotlights">
                {props.pageContext.logs.map(({ node }) => (
                    <section key={node.id}>
                        <Link to={node.frontmatter.path} className="image">
                            <Img fluid={getCover(allLogs, node.frontmatter.path)} />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>{node.frontmatter.title}</h3>
                                    <h4>{node.frontmatter.date}</h4>
                                </header>
                                {/*node.excerpt*/}
                                <ul className="actions">
                                    <li><Link to={node.frontmatter.path} className="button">Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                ))}
            </section>
        </div>
    </Layout>
  )
}

export default Logs

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "YYYY-MM-DD")
            cover {
              childImageSharp {
                fluid(maxWidth:1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

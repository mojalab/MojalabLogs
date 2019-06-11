import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

const getDisplayTitle = (prefix) => {
  switch (prefix) {
    case "ALL":
      return "Mojalab"
    case "moja":
      return "Moja's"
    case "carton":
      return "Carton's"
    case "gasu":
      return "Gasu's"
    case "sharibou":
      return "Sharibou's"
    default:
      return ""
  }
}

const Logs = (props) => (
    <Layout>
        <Helmet>
            <title>{getDisplayTitle(props.pageContext.prefix)} Logs</title>
            <meta name="description" content="Logs Page" />
        </Helmet>

        <BannerLanding
          title={getDisplayTitle(props.pageContext.prefix)}
          prefix={props.pageContext.prefix}
        />

        <div id="main">
            <section className="spotlights">
                {props.pageContext.logs.map(({ node }) => (
                    <section key={node.id}>
                        <Link to={node.frontmatter.path} className="image">
                            {/*<Img fluid={node.frontmatter.cover.childImageSharp.fluid} />*/}
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>{node.frontmatter.title}</h3>
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

export default Logs
//
// export const query = graphql`
//   query {
//     allMarkdownRemark(
//       limit: 6
//       sort: { order: DESC, fields: [frontmatter___date] }
//     ) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 75)
//           frontmatter {
//             title
//             path
//             tags
//             date(formatString: "YYYY-MM-DD")
//             cover {
//               childImageSharp {
//                 fluid(maxWidth: 2000) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

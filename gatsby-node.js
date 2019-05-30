const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blog = path.resolve(`src/templates/generic.js`)
  const logs = path.resolve(`src/templates/logs.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    createPage({
        path: '/logs',
        component: logs,
        context: {},
    });

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blog,
        context: {}, // additional data can be passed via context
      })
    })
  })
}

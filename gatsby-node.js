const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const logTemplate = path.resolve(`src/templates/Log.js`)
  const logsTemplate = path.resolve(`src/templates/Logs.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              path
              author
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    let tags = []
    posts.forEach(({ node }) => {
      node.frontmatter.tags.forEach(tag => (
        tags = [...tags, tag]
      ))
    })
    tags = new Set(tags)
    tags.forEach(tag => (
      createPage({
        path: `/logs/${tag}`,
        component: logsTemplate,
        context: {
          prefix: tag,
          logs: posts.filter(({ node }) => (node.frontmatter.tags.indexOf(tag) >= 0)),
        },
      })
    ))

    // const authors = new Set(posts.map(({ node }) => (node.frontmatter.author)))
    const authors = ["moja", "carton", "gasu", "syaribou"]
    authors.forEach(author => (
      createPage({
        path: `/logs/${author}`,
        component: logsTemplate,
        context: {
          prefix: author,
          logs: posts.filter(({ node }) => (node.frontmatter.author === author)),
        },
      })
    ))

    createPage({
      path: `/logs`,
      component: logsTemplate,
      context: {
        prefix: `ALL`,
        logs: posts,
      }
    })

    posts.forEach(({ node }) => (
      createPage({
        path: node.frontmatter.path,
        component: logTemplate,
        context: {}, // additional data can be passed via context
      })
    ))
  })
}

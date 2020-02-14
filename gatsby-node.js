require('dotenv').config()
const path = require('path')
const slash = require('slash')
const _ = require('lodash')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      wordpress {
        posts(where: { status: PUBLISH }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    console.error(result.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Blog Posts
  const postTemplate = path.resolve(`./src/templates/blog-post.js`)
  _.each(result.data.wordpress.posts.edges, edge => {
    const { node } = edge
    const post = node
    createPage({
      path: `/blog/${post.slug}`,
      component: slash(postTemplate),
      context: {
        slug: post.slug,
      },
    })
  })
}

// const path = require(`path`)

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`src/components/BlogPost/BlogPost.component.tsx`)
//   const result = await graphql(`
//     {
//       allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
//         edges {
//           node {
//             frontmatter {
//               path
//               lang
//             }
//           }
//         }
//       }
//     }
//   `)
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     const { path, lang } = node.frontmatter
//     const formattedPath = path.replace(`/${lang}`, '')
//     createPage({
//       path: formattedPath,
//       component: blogPostTemplate,
//       context: {} // additional data can be passed via context
//     })
//   })
// }

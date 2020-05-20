//==================================Create the Project Pages==================================\\
exports.createPages = async ({ graphql, actions
}) => {
  const { createPage
  } = actions
  const result = await graphql(
    `
    {
        projects: allContentfulProject {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }
  // Create project pages.
  const projects = result.data.projects.edges
  projects.forEach((project, index) => {
    createPage({
      path: `/project/${project.node.slug}`,
      component: require.resolve("./src/pages/project.js"),
      context: {
        project: project.node,
      },
    })
  })
}
//==================================Create the Project Pages==================================\\
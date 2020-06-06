import React from "react"

import SEO from "../inc/seo"
import ProjectDashboard from "../components/ProjectDashboard"

import "../styles/global.scss"

const ProjectPage = ({ pageContext }) => (
	<>
		<SEO title="Project" />
		<ProjectDashboard project={pageContext.project} />
	</>
)

export default ProjectPage

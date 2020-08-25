import React from "react"

import SEO from "../inc/seo"
import ProjectDashboard from "../components/Shared/ProjectDashboard"

import "../styles/global.scss"

const ProjectPage = ({ pageContext }) => (
	<>
		<SEO title="Project" />
		{pageContext.project !== null && pageContext.project !== undefined ? (
			<ProjectDashboard project={pageContext.project} />
		) : (
			<div>
				{/* ====================================== TODO: Project Splash Page Content ======================================  */}
				<p style={{ textAlign: "center" }}>
					Whoops! You've hit a dead end :( <br />
					Let's get you back <a href="/">home</a>
				</p>
			</div>
		)}
	</>
)

export default ProjectPage

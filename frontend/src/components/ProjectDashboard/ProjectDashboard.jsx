import React from "react"
// import { Link, StaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types"
import "./ProjectDashboard.scss"

import TopBar from "../TopBar"
import InspirationCard from "../InspirationCard"
import ProjectDashboardHeader from "../ProjectDashboardHeader"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ProjectDashboard = props => {
	//Check if project is not null/undefined
	return props.project !== null ? (
		//Render the dashboard
		<div className="project-dashboard-wrapper">
			<TopBar />
			<div className="dashboard-container">
				<div className="dashboard">
					<ProjectDashboardHeader
						logo={props.project?.logo?.file?.url}
						projectId={props.project?.projectId}
						projectName={props.project?.projectName}
						colors={props.project?.colors}
						tags={props.project?.tags}
					/>
					<hr />
					<div className="project-details">
						<h3 className="project-details-heading">
							Project Details
						</h3>
						{/* Renders the rich text from Contentful */}
						{documentToReactComponents(
							props.project?.projectDetails.json
						)}
					</div>
					{/* Check if there are inspirations */}
					{props.project?.inspirations ? (
						<div className="inspiration-container">
							<h3 className="inspiration-container-header">
								Inspiration Pieces
							</h3>
							<div className="inspiration-card-container">
								{/* Map the inspirations and create a card with their info */}
								{props.project?.inspirations.map((inspo, i) => {
									return (
										<InspirationCard
											{...inspo}
											index={`inspo-${i}`}
											key={`inspo-${i}`}
										/>
									)
								})}
							</div>
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	) : (
		//Else render the blank dead end page. This render with be seen at www.site.com/project **Maybe should move this logic to the /pages/project.js file instead**
		<div>
			{/* ====================================== TODO: Project Splash Page Content ======================================  */}
			<p style={{ textAlign: "center" }}>
				Whoops! You've hit a dead end :( <br />
				Let's get you back <a href="/">home</a>
			</p>
		</div>
	)
}

ProjectDashboard.propTypes = {
	// bla: PropTypes.string,
}

ProjectDashboard.defaultProps = {
	// bla: 'test',
}

export default ProjectDashboard

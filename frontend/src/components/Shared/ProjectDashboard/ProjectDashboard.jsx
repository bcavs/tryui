import React from "react"
// import { Link, StaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types"
import "./ProjectDashboard.scss"

import TopBar from "../TopBar"
import InspirationCard from "../InspirationCard"
import ProjectDashboardHeader from "../ProjectDashboardHeader"
import ProjectsTimeline from "../ProjectsTimeline"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ProjectDashboard = props => (
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
				<div className="project-details">
					<h3 className="project-details-heading">Project Details</h3>
					{/* Renders the rich text from Contentful */}
					{documentToReactComponents(
						props.project?.projectDetails.json
					)}
				</div>
				{/* Check if there are inspirations */}
				{props.project?.inspirations ? (
					<div className="inspiration-container">
						<h3 className="inspiration-container-header">
							Inspiration Pieces{" "}
							<a
								className="see-more-inspirations"
								href={
									props.project?.seeMoreInspirationsUrl ??
									"https://dribbble.com/"
								}
							>
								See more
							</a>
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
			<ProjectsTimeline currentProjectId={props.project?.projectId} />
		</div>
	</div>
)

ProjectDashboard.propTypes = {
	// bla: PropTypes.string,
}

ProjectDashboard.defaultProps = {
	// bla: 'test',
}

export default ProjectDashboard

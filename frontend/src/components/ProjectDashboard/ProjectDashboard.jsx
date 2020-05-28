import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import "./ProjectDashboard.scss"

import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import TopBar from "../TopBar"

//Used to display the colors on the project dashboard
const ColorChip = props => (
	<div className="color-chip">
		<div className="dot" style={{ backgroundColor: props.color }} />
		{props.color}
	</div>
)

//Used to display the tag bades on the project dahsboard
const TagBadge = props => (
	<div className="tag-badge">
		<p>{props.tag}</p>
	</div>
)

const ProjectDashboard = props => {
	//Check if project is not null/undefined
	return props.project !== null ? (
		//Render the dashboard
		<div className="project-dashboard-wrapper">
			<TopBar />
			<div className="dashboard-container">
				<div className="dashboard">
					<div className="project-header">
						<div className="logo-container">
							<img
								src={require("../../images/placeholder-company-logo.png")}
							/>
						</div>
						<div className="project-header-info">
							<div className="project-header-info-top">
								<h3>Project ##</h3>
								<h1>{props.project.projectName}</h1>
								<div className="color-chip-container">
									<ColorChip color="#FBD17F" />
									<ColorChip color="#3D90E3" />
									<ColorChip color="#164E87" />
								</div>
							</div>
							<div className="project-header-info-bottom">
								<div className="tag-badge-container">
									<TagBadge tag="Tag 1" />
									<TagBadge tag="Tag 2" />
								</div>
							</div>
						</div>
					</div>
					<div className="project-details">
						{/* Renders the rich text from Contentful */}
						{documentToReactComponents(
							props.project.projectDetails.json
						)}
					</div>
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

import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import "./ProjectDashboard.scss"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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

const InspirationCard = props => {
	return (
		<div className="inspiration-card">
			<div className="inspiration-image-link">
				<a href={props?.imageLink ?? "#"}>
					<img
						src={
							props.image?.file?.url ??
							"https://via.placeholder.com/400x300"
						}
					/>
				</a>
			</div>
			<h5 className="inspiration-credit-line">
				Credit:{" "}
				<a
					className="inspiration-author-link"
					href={props?.authorLink ?? "#"}
				>
					{props?.author ?? "{Author name missing}"}
				</a>
			</h5>
		</div>
	)
}

const renderColorChips = colors => {
	let chips = colors.map((color, index) => (
		<ColorChip color={color} key={index} />
	))
	return chips
}

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
							{/* Check if the url exists otherwise display placeholder logo */}
							<img
								src={
									props.project?.logo?.file?.url ??
									require("../../images/placeholder-company-logo.png")
								}
							/>
						</div>
						<div className="project-header-info">
							<div className="project-header-info-top">
								<h3>
									Project #
									{props.project?.projectId ?? "{Missing ID}"}
								</h3>
								<h1>
									{/* Optional chaining (?.) with nullish coalescing (??) to determine if projectName exists --
									 if it doesn't then display fallback text */}
									{props.project?.projectName ??
										"{Missing Project Name}"}
								</h1>
								<div className="color-chip-container">
									{/* Send colors to render function if colors exist otherwise send blank array */}
									{renderColorChips(
										props.project?.colors ?? []
									)}
								</div>
							</div>
							<div className="project-header-info-bottom">
								{props.project.tags ? (
									<div className="tag-badge-container">
										{/* Map the tags and create a badge with their info */}
										{props.project.tags.map((tag, i) => {
											return <TagBadge {...tag} />
										})}
									</div>
								) : (
									""
								)}
							</div>
						</div>
					</div>
					<div className="project-details">
						<h3 className="project-details-heading">
							Project Details
						</h3>
						{/* Renders the rich text from Contentful */}
						{documentToReactComponents(
							props.project.projectDetails.json
						)}
					</div>
					{/* Check if there are inspirations */}
					{props.project.inspirations ? (
						<div className="inspiration-container">
							<h3 className="inspiration-container-header">
								Inspiration Pieces
							</h3>
							<div className="inspiration-card-container">
								{/* Map the inspirations and create a card with their info */}
								{props.project.inspirations.map((inspo, i) => {
									return <InspirationCard {...inspo} />
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

import React from "react"
import PropTypes from "prop-types"
import "../../styles/global.scss"
import "./ProjectDashboardHeader.scss"

import ColorChip from "../ColorChip"
import TagBadge from "../TagBadge"

const renderColorChips = colors => {
	let chips = colors.map((color, index) => (
		<ColorChip color={color} key={index} />
	))
	return chips
}

const ProjectDashboardHeader = props => (
	<div className="project-header">
		{/* Check if the url exists otherwise display placeholder logo */}
		<div className="responsive-square project-logo">
			<div className="logo-img-overlay" />
			<img
				src={
					props.logo ??
					require("../../images/placeholder-company-logo.png")
				}
				alt="Company Logo"
				className="logo-img"
			/>
		</div>
		<div className="top-content-container">
			<div className="project-title">
				<h3>Project #{props.projectId ?? "{Missing ID}"}</h3>
				<h1>
					{/* Optional chaining (?.) with nullish coalescing (??) to determine if projectName exists --
  										 if it doesn't then display fallback text */}
					{props.projectName ?? "{Missing Project Name}"}
				</h1>
			</div>
			{props.tags ? (
				<div className="tag-badge-container">
					{/* Map the tags and create a badge with their info */}
					{props.tags.map((tag, i) => {
						return (
							<TagBadge
								{...tag}
								index={`tag-${i}`}
								key={`tag-${i}`}
							/>
						)
					})}
				</div>
			) : (
				""
			)}
		</div>
		{props.colors ? (
			<div className="color-chip-container">
				{/* Send colors to render function if colors exist otherwise send blank array */}
				{renderColorChips(props.colors ?? [])}
			</div>
		) : (
			""
		)}
	</div>
)

ProjectDashboardHeader.propTypes = {
	// bla: PropTypes.string,
}

ProjectDashboardHeader.defaultProps = {
	// bla: 'test',
}

export default ProjectDashboardHeader

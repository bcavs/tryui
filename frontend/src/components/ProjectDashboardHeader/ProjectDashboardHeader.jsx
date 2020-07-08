import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types"
import "../../styles/global.scss"
import "./ProjectDashboardHeader.scss"

// import { AwesomeButton } from "react-awesome-button"
// import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss"
import ColorChip from "../ColorChip"
import TagBadge from "../TagBadge"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"

import PlaceholderLogo from "../../images/placeholder-company-logo.png"

const renderColorChips = colors => {
	let chips = colors.map((color, index) => (
		<ColorChip color={color} key={index} />
	))
	return chips
}

const renderPrevNextProjectArrows = (pages, pageId) => {
	function checkPreviousSpot() {
		if (parseInt(pageId) > 0) {
			const prevProject = pages[pageId - 1].node
			return (
				<a
					href={`/project/${prevProject.slug}`}
					className="prev-project-arrow"
				>
					<FaArrowAltCircleLeft size={"30px"} />
					<p className="arrow-text">Previous Project</p>
				</a>
			)
		} else {
			return <div />
		}
	}
	function checkNextSpot() {
		if (parseInt(pageId) < pages.length - 1) {
			const nextProject = pages[pageId + 1].node
			return (
				<a
					href={`/project/${nextProject.slug}`}
					className="next-project-arrow"
				>
					<FaArrowAltCircleRight size={"30px"} />
					<p className="arrow-text">Next Project</p>
				</a>
			)
		} else {
			return <div />
		}
	}
	return (
		<div className="mobile-project-switcher">
			{checkPreviousSpot()}
			{checkNextSpot()}
		</div>
	)
}

const ProjectDashboardHeader = props => {
	const data = useStaticQuery(graphql`
		query NextPrevProjectsQuery {
			allContentfulProject(sort: { fields: [projectId], order: ASC }) {
				edges {
					node {
						projectName
						projectId
						slug
					}
				}
			}
		}
	`)
	return (
		<div className="project-header">
			{/* Check if the url exists otherwise display placeholder logo */}
			<a
				href={props.logo}
				download
				target="_blank"
				rel="noopener noreferrer"
				className="responsive-square project-logo"
			>
				<div className="logo-img-overlay" />
				<img
					src={props.logo ?? PlaceholderLogo}
					alt="Company Logo"
					className="logo-img"
				/>
			</a>
			<div className="top-content-container">
				<div className="project-title">
					{renderPrevNextProjectArrows(
						data.allContentfulProject.edges,
						props.projectId ?? -1
					)}
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
}

ProjectDashboardHeader.propTypes = {
	// bla: PropTypes.string,
}

ProjectDashboardHeader.defaultProps = {
	// bla: 'test',
}

export default ProjectDashboardHeader

import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./ProjectsTimeline.scss"

const Project = ({ project, currentProjectId }) => {
	const isActive =
		project.projectId === currentProjectId ? "active" : "inactive"
	return (
		<div className="timeline-project">
			<a
				className={`timeline-project-link ${isActive}`}
				href={`/project/${project.slug}`}
			>
				<h3 className={`timeline-project-id`}>
					Project #{project.projectId}
				</h3>
				<p className={`timeline-project-name`}>{project.projectName}</p>
			</a>
		</div>
	)
}

const ProjectsTimeline = props => {
	const data = useStaticQuery(graphql`
		query TimelineQuery {
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
		<div className="projects-timeline-wrapper">
			<div>
				{data.allContentfulProject?.edges?.map((project, i) => {
					return (
						<Project
							project={project.node}
							currentProjectId={props.currentProjectId}
							key={i}
						/>
					)
				})}
			</div>
		</div>
	)
}
ProjectsTimeline.propTypes = {
	// bla: PropTypes.string,
}

ProjectsTimeline.defaultProps = {
	// bla: 'test',
}

export default ProjectsTimeline

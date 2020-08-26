import React from "react"
import "./ViewProjectCard.scss"

import TellyLogo from "../../../images/logo-tellyio.png"

const ViewProjectCard = props => (
	<div className="view-project-card-wrapper">
		<h5 className="project-number">Project #1</h5>
		<img className="project-logo" src={TellyLogo} alt="Project Logo" />
		<h2 className="project-name">Telly.io</h2>
		<button className="view-project-button">View project</button>
	</div>
)

ViewProjectCard.propTypes = {
	// bla: PropTypes.string,
}

ViewProjectCard.defaultProps = {
	// bla: 'test',
}

export default ViewProjectCard

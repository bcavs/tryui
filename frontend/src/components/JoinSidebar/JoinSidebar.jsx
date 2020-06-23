import React from "react"
// import PropTypes from "prop-types"
import "./JoinSidebar.scss"

import Logo from "../Logo"

const JoinSidebar = props => (
	<div className="JoinSidebarWrapper">
		<div className="LogoWrapper">
			<Logo />
		</div>
		<div className="MobileImage" />
		<div className="ContentWrapper">
			<h1>
				Learn to build better UI,
				<br />
				piece-by-piece.
			</h1>
			<p>
				Weekly design briefs give you the tools you need to begin your
				journey in UI design
			</p>
			<div className="EmailCapture"></div>
		</div>
		<div className="FooterWrapper">Footer Content</div>
	</div>
)

JoinSidebar.propTypes = {
	// bla: PropTypes.string,
}

JoinSidebar.defaultProps = {
	// bla: 'test',
}

export default JoinSidebar

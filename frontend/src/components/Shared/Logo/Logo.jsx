import React from "react"
// import PropTypes from "prop-types"
import "./Logo.scss"

import CustomSVG from "../../../images/CustomSVG"

const Logo = props => (
	<CustomSVG name="Logo" className="logo" fill={props.fill} />
)

Logo.propTypes = {
	// bla: PropTypes.string,
}

Logo.defaultProps = {
	// bla: 'test',
}

export default Logo

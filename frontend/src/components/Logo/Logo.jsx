import React from "react"
import PropTypes from "prop-types"
import "./Logo.scss"

import logo from "../../images/logo.svg"
import CustomSVG from "../../images/CustomSVG"

const Logo = props => <CustomSVG name="Logo" className="logo" />

Logo.propTypes = {
	// bla: PropTypes.string,
}

Logo.defaultProps = {
	// bla: 'test',
}

export default Logo

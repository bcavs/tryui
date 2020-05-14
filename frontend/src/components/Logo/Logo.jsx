import React from "react"
import PropTypes from "prop-types"
import "./Logo.scss"

import logo from "../../images/logo.svg"

const Logo = props => <img alt="TryUI Logo" src={logo} className="logo" />

Logo.propTypes = {
	// bla: PropTypes.string,
}

Logo.defaultProps = {
	// bla: 'test',
}

export default Logo

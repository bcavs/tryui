import React from "react"
import PropTypes from "prop-types"
import "./CtaButton.scss"

const CtaButton = props => (
	<button className="cta-button">{props.children}</button>
)

CtaButton.propTypes = {
	// bla: PropTypes.string,
}

CtaButton.defaultProps = {
	// bla: 'test',
}

export default CtaButton

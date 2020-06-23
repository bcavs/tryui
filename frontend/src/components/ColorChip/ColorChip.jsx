import React from "react"
import PropTypes from "prop-types"
import "./ColorChip.scss"

//Used to display the colors on the project dashboard
const ColorChip = props => {
	return (
		<div className="color-chip">
			<div className="dot" style={{ backgroundColor: props.color }} />
			{props.color}
		</div>
	)
}

ColorChip.propTypes = {
	// bla: PropTypes.string,
}

ColorChip.defaultProps = {
	// bla: 'test',
}

export default ColorChip

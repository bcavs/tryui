import React from "react"
import "./TagBadge.scss"

import { FaPalette, FaClock } from "react-icons/fa"

//Used to display the tag bades on the project dashboard
const TagBadge = props => {
	console.log("props", props)

	return (
		<div className="tag-badge" key={props.index}>
			{renderIcon(props.icon)}
			<p className="tag-badge-text">{props.tag}</p>
		</div>
	)
}

const renderIcon = icon => {
	const settings = {
		size: 15,
	}
	switch (icon) {
		case "Time":
			return <FaClock {...settings} />
		case "Palette":
			return <FaPalette {...settings} />
		default:
			console.log("No icon")
			break
	}
}

TagBadge.propTypes = {
	// bla: PropTypes.string,
}

TagBadge.defaultProps = {
	// bla: 'test',
}

export default TagBadge

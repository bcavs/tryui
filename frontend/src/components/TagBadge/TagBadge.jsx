import React from "react"
// import PropTypes from "prop-types"
//import { Test } from './TagBadge.styles';

//Used to display the tag bades on the project dashboard
const TagBadge = props => (
	<div className="tag-badge" key={props.index}>
		<p>{props.tag}</p>
	</div>
)

TagBadge.propTypes = {
	// bla: PropTypes.string,
}

TagBadge.defaultProps = {
	// bla: 'test',
}

export default TagBadge

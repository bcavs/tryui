import React from "react"
// import PropTypes from "prop-types"
import "./InspirationCard.scss"

const InspirationCard = props => {
	return (
		<div className="inspiration-card" key={props.index}>
			<a
				className="inspiration-image-link"
				href={props?.imageLink ?? "#"}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={
						props.image?.file?.url ??
						"https://via.placeholder.com/400x300"
					}
					alt="Inspiration Piece"
				/>
			</a>
			<h5 className="inspiration-credit-line">
				Credit:{" "}
				<a
					className="inspiration-author-link"
					href={props?.authorLink ?? "#"}
					target="_blank"
					rel="noopener noreferrer"
				>
					{props?.author ?? "{Author name missing}"}
				</a>
			</h5>
		</div>
	)
}

InspirationCard.propTypes = {
	// bla: PropTypes.string,
}

InspirationCard.defaultProps = {
	// bla: 'test',
}

export default InspirationCard

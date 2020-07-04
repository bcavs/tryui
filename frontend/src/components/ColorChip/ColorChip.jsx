import React, { useRef, useState } from "react"
// import PropTypes from "prop-types"
import "./ColorChip.scss"

//Used to display the colors on the project dashboard
export default function ColorChip(props) {
	const [copySuccess, setCopySuccess] = useState("Click to copy")
	const textAreaRef = useRef(null)
	function copyToClipboard(e) {
		textAreaRef.current.select()
		document.execCommand("copy")
		// This is just personal preference.
		// I prefer to not show the the whole text area selected.
		e.target.focus()
		setCopySuccess("Copied!")
		setTimeout(function () {
			setCopySuccess("Click to copy")
		}, 3000)
	}

	return (
		<>
			<div className="color-chip">
				{
					/* Logical shortcut for only displaying the 
			   button if the copy command exists */
					document.queryCommandSupported("copy") && (
						<div className="click-to-copy">
							<div
								className="click-to-copy-button"
								style={{ zIndex: 99 }}
							>
								<div
									className="color-chip-slider-animation"
									style={{
										backgroundColor: props.color,
										zIndex: 3,
									}}
								/>
								<button onClick={copyToClipboard}></button>
							</div>
							<p
								className="color-chip-copy-message"
								style={{ zIndex: 1 }}
							>
								{copySuccess}
							</p>
						</div>
					)
				}
				<div
					className="block"
					style={{ backgroundColor: props.color, zIndex: 2 }}
				/>
				<textarea
					disabled
					value={props.color}
					className="hex-text"
					style={{ zIndex: 4 }}
					ref={textAreaRef}
				/>
			</div>
		</>
	)
}

ColorChip.propTypes = {
	// bla: PropTypes.string,
}

ColorChip.defaultProps = {
	// bla: 'test',
}

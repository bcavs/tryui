import React from "react"
import "./TopBar.scss"

import { AwesomeButtonSocial } from "react-awesome-button"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

import Logo from "../Logo"
// import CustomSVG from "../../images/CustomSVG"

const TopBar = props => {
	return (
		<div className="top-bar-wrapper">
			<div className="container">
				<div className="logo-wrapper">
					<Logo fill="white" />
				</div>
				<div className="social-wrapper">
					<a className="social-links" href="facebook.com">
						<FaFacebook size="32" color="white" />
					</a>
					<a className="social-links" href="instagram.com">
						<FaInstagram size="32" color="white" />
					</a>
					<a className="social-links" href="twitter.com">
						<FaTwitter size="32" color="white" />
					</a>
					{/* <AwesomeButtonSocial
						size="icon"
						type="facebook"
						url="https://google.com"
						ripple
						style={{ marginLeft: "10px" }}
					></AwesomeButtonSocial>
					<AwesomeButtonSocial
						size="icon"
						type="instagram"
						url="https://google.com"
						ripple
						style={{ marginLeft: "10px" }}
					></AwesomeButtonSocial>
					<AwesomeButtonSocial
						size="icon"
						type="twitter"
						url="https://google.com"
						ripple
						style={{ marginLeft: "10px" }}
					></AwesomeButtonSocial> */}
				</div>
			</div>
		</div>
	)
}

TopBar.propTypes = {
	// bla: PropTypes.string,
}

TopBar.defaultProps = {
	// bla: 'test',
}

export default TopBar

import React from "react"
import "./TopBar.scss"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import Logo from "../../Shared/Logo"

const TopBar = props => {
	return (
		<div className="home-page_top-bar-wrapper">
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
					<a className="cta" href="/donate">
						<b>Donate</b>
					</a>
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

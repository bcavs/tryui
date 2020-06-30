import React from "react"
import "./TopBar.scss"

import { AwesomeButtonSocial } from "react-awesome-button"
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss"

import Logo from "../Logo"
// import CustomSVG from "../../images/CustomSVG"

const TopBar = props => (
	<div className="TopBarWrapper">
		<div className="Container">
			<div className="LogoWrapper">
				<Logo />
			</div>
			<div className="SocialWrapper">
				<AwesomeButtonSocial
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
				></AwesomeButtonSocial>
			</div>
		</div>
	</div>
)

TopBar.propTypes = {
	// bla: PropTypes.string,
}

TopBar.defaultProps = {
	// bla: 'test',
}

export default TopBar

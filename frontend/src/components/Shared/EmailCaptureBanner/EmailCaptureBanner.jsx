import React from "react"
import "./EmailCaptureBanner.scss"

import { Grid, Container } from "@material-ui/core"
import { ChevronRight } from "@material-ui/icons"

const EmailCaptureBanner = props => (
	<div className="email-capture-banner">
		<Container className="content-container">
			<Grid container justify="center" alignItems="center">
				<Grid item xs={12} md={6}>
					<h4 className="headline">{props.children}</h4>
				</Grid>

				<Grid item xs={12} md={6} justify="center" alignItems="center">
					<div className="email-capture">
						<input placeholder="Email" type="email"></input>
						<button class="submit-button">
							<p>Submit</p>{" "}
							<ChevronRight className="submit-chevron" />
						</button>
					</div>
				</Grid>
			</Grid>
		</Container>
		<div className="gradient-overlay" />
	</div>
)

EmailCaptureBanner.propTypes = {
	// bla: PropTypes.string,
}

EmailCaptureBanner.defaultProps = {
	// bla: 'test',
}

export default EmailCaptureBanner

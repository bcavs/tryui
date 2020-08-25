import React from "react"

import SEO from "../inc/seo"
import TopBar from "../components/HomePage/TopBar"
import CtaButton from "../components/Shared/CtaButton"

import "../styles/global.scss"
import "../styles/pages/home.scss"

import "react-awesome-button/src/styles/styles.scss"

import { Grid, Container } from "@material-ui/core"

import HeroImage from "../images/home-hero.png"

// ================= Used to hide a bugged warning from react-hot-loader =================
import { setConfig } from "react-hot-loader"

setConfig({
	showReactDomPatchNotification: false,
})
// =======================================================================================

const styles = {
	body: {
		width: "100%",
		height: "100vh",
		display: "flex",
	},
}

const IndexPage = () => (
	<>
		<SEO title="Home" />
		<TopBar />
		<div className="home-page_hero">
			<Container className="hero-content-container">
				<Grid container>
					<Grid container item xs={12} md={7} alignItems="center">
						<div className="hero-content">
							<h1>
								Curated project briefs so you can focus on
								designing great UI's
							</h1>
							<p>
								Simple guidelines to help you get straight into
								designing user interfaces
							</p>
							<CtaButton>Start your first project</CtaButton>
						</div>
					</Grid>
					<Grid
						container
						item
						xs={12}
						md={5}
						justify="center"
						alignItems="center"
					>
						<img
							className="hero-image"
							src={HeroImage}
							alt="Design UI"
						/>
					</Grid>
				</Grid>
				<div className="gradient-overlay blue" />
				<div className="gradient-overlay red" />
			</Container>
		</div>
		<div className="body" style={styles.body}>
			<p>Home</p>
		</div>
	</>
)

export default IndexPage

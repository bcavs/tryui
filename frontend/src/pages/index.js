import React from "react"
import "../styles/global.scss"
import "../styles/pages/home.scss"
import "react-awesome-button/src/styles/styles.scss"

import { Grid, Container } from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

import SEO from "../inc/seo"
import TopBar from "../components/HomePage/TopBar"
import CtaButton from "../components/Shared/CtaButton"
import EmailCaptureBanner from "../components/Shared/EmailCaptureBanner"
import ViewProjectCard from "../components/HomePage/ViewProjectCard"

import HeroImage from "../images/home-hero.png"

// ================= Used to hide a bugged warning from react-hot-loader =================
import { setConfig } from "react-hot-loader"

setConfig({
	showReactDomPatchNotification: false,
})
// =======================================================================================

const IndexPage = () => (
	<>
		<SEO title="Home" />
		<TopBar />
		<div className="home-page_hero">
			<Container className="hero-content-container">
				<Grid container className="inner-container">
					<Grid
						container
						item
						xs={12}
						md={7}
						alignItems="center"
						justify="center"
					>
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
		<EmailCaptureBanner>
			Don't miss new projects! <br />
			Get them sent straight to your inbox:
		</EmailCaptureBanner>
		<div className="body">
			<div className="projects-header">
				<h4>PROJECTS</h4>
				<ArrowDropDownIcon
					style={{ fontSize: 35, marginTop: "-10px" }}
				/>
			</div>
			<Container>
				<Grid container spacing={5} className="projects-grid">
					<Grid item xs={12} sm={6} md={4}>
						<ViewProjectCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ViewProjectCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ViewProjectCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ViewProjectCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ViewProjectCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ViewProjectCard />
					</Grid>
				</Grid>
			</Container>
		</div>
	</>
)

export default IndexPage

import React from "react"

import SEO from "../inc/seo"
import TopBar from "../components/HomePage/TopBar"

import "../styles/global.scss"
import "../styles/pages/home.scss"

import "react-awesome-button/src/styles/styles.scss"

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
			<h1>
				Curated project briefs so you can focus on designing great UI's
			</h1>
		</div>
		<div className="body" style={styles.body}>
			<p>Home</p>
		</div>
	</>
)

export default IndexPage

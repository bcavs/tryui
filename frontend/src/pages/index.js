import React from "react"

import SEO from "../inc/seo"
import TopBar from "../components/Shared/TopBar"

import "../styles/global.scss"
import "react-awesome-button/src/styles/styles.scss"

// ================= Used to hide a bugged warning from react-hot-loader =================
import { setConfig } from "react-hot-loader"

setConfig({
	showReactDomPatchNotification: false,
})
// =======================================================================================

const styles = {
	body: {
		width: "100vw",
		height: "100vh",
		display: "flex",
	},
}

const IndexPage = () => (
	<>
		<SEO title="Home" />
		<TopBar />
		<div className="body" style={styles.body}>
			<p>Home</p>
		</div>
	</>
)

export default IndexPage

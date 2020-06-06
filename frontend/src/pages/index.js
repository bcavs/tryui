import React from "react"

import SEO from "../inc/seo"
import JoinSidebar from "../components/JoinSidebar"
import JoinBackground from "../components/JoinBackground/JoinBackground"

import "../styles/global.scss"

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
		<SEO title="Join" />
		<div className="body" style={styles.body}>
			<JoinSidebar />
			<JoinBackground />
		</div>
	</>
)

export default IndexPage

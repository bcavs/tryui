import React from "react"

import SEO from "../inc/seo"
import JoinSidebar from "../components/JoinSidebar"
import JoinBackground from "../components/JoinBackground/JoinBackground"

import "../styles/global.scss"

const styles = {
	body: {
		width: "100vw",
		height: "100vh",
		display: "flex",
	},
}

const IndexPage = () => (
	<div className="body" style={styles.body}>
		<SEO title="Join" />
		<JoinSidebar />
		<JoinBackground />
	</div>
)

export default IndexPage

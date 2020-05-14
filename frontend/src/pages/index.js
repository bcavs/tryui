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
	<>
		<SEO title="Join" />
		<div className="body" style={styles.body}>
			<JoinSidebar />
			<JoinBackground />
		</div>
	</>
)

export default IndexPage

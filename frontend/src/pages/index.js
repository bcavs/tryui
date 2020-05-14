import React from "react"

import SEO from "../inc/seo"
import JoinSidebar from "../components/JoinSidebar"
import JoinBackground from "../components/JoinBackground/JoinBackground"

import "../styles/global.scss"

const IndexPage = () => (
  <div className="body">
    <SEO title="Join" />
    <JoinSidebar />
    <JoinBackground/>
  </div>
)

export default IndexPage

import React from "react"

import SEO from "../inc/seo"
import JoinSidebar from "../components/JoinSidebar"

import "../styles/global.scss"

const IndexPage = () => (
  <div className="body">
    <SEO title="Join" />
    <JoinSidebar />
  </div>
)

export default IndexPage

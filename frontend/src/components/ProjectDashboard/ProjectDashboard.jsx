import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import "./ProjectDashboard.scss"

import TopBar from "../TopBar"

const ColorChip = props => (
	<div className="color-chip">
		<div className="dot" style={{ backgroundColor: props.color }} />
		{props.color}
	</div>
)

const CategoryBadge = props => (
	<div className="category-badge">
		<p>{props.category}</p>
	</div>
)

const ProjectDashboard = props => (
	<div className="project-dashboard-wrapper">
		{console.log("Props: ", props)}
		<TopBar />
		<div className="dashboard-container">
			<div className="dashboard">
				<div className="project-header">
					<div className="logo-container">
						<img
							src={require("../../images/placeholder-company-logo.png")}
						/>
					</div>
					<div className="project-header-info">
						<div className="project-header-info-top">
							<h3>Project ##</h3>
							<h1>{props.project.projectName}</h1>
							<div className="color-chip-container">
								<ColorChip color="#FBD17F" />
								<ColorChip color="#3D90E3" />
								<ColorChip color="#164E87" />
							</div>
						</div>
						<div className="project-header-info-bottom">
							<div className="category-badge-container">
								<CategoryBadge category="Category 1" />
								<CategoryBadge category="Category 2" />
							</div>
						</div>
					</div>
				</div>
        <div className="project-details">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic labore modi, ut nemo voluptas soluta est assumenda! Voluptatibus, architecto voluptate. In non, itaque est veniam autem suscipit. Neque omnis magni veritatis, iure sapiente sunt voluptas dolorum voluptate repudiandae eos optio rem eligendi? Dolores odit dolorum expedita quas iure modi minus aperiam distinctio provident perferendis fugiat consectetur vitae aliquam, esse vero repellendus. Expedita voluptatibus reiciendis veniam ratione aspernatur? Placeat dolore eaque, necessitatibus libero numquam, corrupti quo asperiores similique cumque, dolores doloremque maxime non. Corrupti aliquid veritatis reprehenderit eligendi a! Minus itaque veniam quo ducimus pariatur possimus voluptas sunt laborum nemo consectetur, nam aut incidunt vitae a, iure commodi et eveniet nobis magni mollitia omnis repellat deleniti. Expedita necessitatibus porro esse temporibus architecto! Sit cumque quibusdam ducimus sapiente omnis quidem deserunt molestiae labore facilis a porro totam, error architecto laborum aspernatur, iure vel. Aliquam sequi, voluptatibus minima rem eaque ducimus mollitia nostrum!</p>
        </div>
      </div>
		</div>
	</div>
)

ProjectDashboard.propTypes = {
	// bla: PropTypes.string,
}

ProjectDashboard.defaultProps = {
	// bla: 'test',
}

export default ProjectDashboard

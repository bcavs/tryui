import React from 'react';
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types';
import "./ProjectDashboard.scss";

import TopBar from '../TopBar';

const ProjectDashboard = (props) => (
  <div className="ProjectDashboardWrapper">
    <TopBar/>
    <div className="Dashboard">
      DASH
      <StaticQuery
        query={graphql`
                query {
                  allStrapiProjects {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                }
              `}
        render={data =>
          data.allStrapiProjects.edges.map((project, i) => {
            return (
              <li key={project.node.id}>
                {project.node.id}
              </li>
            )
          })
        }
      />
    </div>
  </div>
);

ProjectDashboard.propTypes = {
  // bla: PropTypes.string,
};

ProjectDashboard.defaultProps = {
  // bla: 'test',
};

export default ProjectDashboard;

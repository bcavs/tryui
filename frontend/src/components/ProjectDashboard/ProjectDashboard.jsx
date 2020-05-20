import React from 'react';
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types';
import "./ProjectDashboard.scss";

import TopBar from '../TopBar';

const ProjectDashboard = (props) => (
  <div className="ProjectDashboardWrapper">
    {console.log("Props: ", props)}
    <TopBar/>
    <div className="Dashboard">
      DASH
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

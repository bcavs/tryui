import React from 'react';
import PropTypes from 'prop-types';
import "./ProjectDashboard.scss";

import TopBar from '../TopBar';

const ProjectDashboard = (props) => (
  <div className="ProjectDashboardWrapper">
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

import React from 'react';
import PropTypes from 'prop-types';
import "./TopBar.scss"

import Logo from "../Logo"
import Facebook from "../../images/facebook-circle.svg"
import Instagram from "../../images/instagram-circle.svg"
import Twitter from "../../images/twitter-circle.svg"


const TopBar = (props) => (
  <div className="TopBarWrapper">
    <div className="Container">
      <div className="LogoWrapper">
        <Logo />
      </div>
      <div className="SocialWrapper">
        <img alt="TryUI Facebook" src={Facebook} className="SocialIcon" />
        <img alt="TryUI Instagram" src={Instagram} className="SocialIcon" />
        <img alt="TryUI Twitter" src={Twitter} className="SocialIcon" />
      </div>
    </div>
  </div>
);

TopBar.propTypes = {
  // bla: PropTypes.string,
};

TopBar.defaultProps = {
  // bla: 'test',
};

export default TopBar;

import React from 'react';
import "./TopBar.scss"

import Logo from "../Logo"
import CustomSVG from '../../images/CustomSVG'

const TopBar = (props) => (
  <div className="TopBarWrapper">
    <div className="Container">
      <div className="LogoWrapper">
        <Logo/>
      </div>
      <div className="SocialWrapper">
        <CustomSVG name="Facebook" />
        <CustomSVG name="Instagram"/>
        <CustomSVG name="Twitter" />
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

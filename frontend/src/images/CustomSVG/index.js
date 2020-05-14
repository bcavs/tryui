import React from 'react';

import Facebook from './Facebook';
import Instagram from './Instagram';
import Logo from './Logo';
import Twitter from './Twitter';

const CustomSVG = props => {
    switch (props.name) {
        case "Facebook":
            return <Facebook {...props} />;
        case "Instagram":
            return <Instagram {...props} />;
        case "Logo":
            return <Logo {...props} />;
        case "Twitter":
            return <Twitter {...props} />;
        default:
            return <div />;
    }
}
export default CustomSVG;
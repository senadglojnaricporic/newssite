import React from 'react';

import {Link} from "react-router-dom";

function NavItem(props) {

    const styleLink = {textDecoration: 'none', /*fontWeight: 'bold', letterSpacing: '0.1em',*/ fontSize: '1.5em'};

    return (
        <Link to = {props.path} style = {styleLink}>
            {props.text}
        </Link>
    );
}

export default NavItem;

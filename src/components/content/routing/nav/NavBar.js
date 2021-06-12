import React from 'react';

import NavItem from './NavItem'

function NavBar() {

    const styleNav1 = {position: 'fixed', top: '0', width: '80%',height: '5em', backgroundColor: 'tomato',
                    zIndex: '10', boxShadow: '10px 10px 10px grey'};
    const styleNav2 = {display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '5em'};

    return (
        <div style = {styleNav1}>
            <div style = {styleNav2}>
                <NavItem text = 'General' path = '/general'/>
                <NavItem text = 'Business' path = '/business'/>
                <NavItem text = 'Sports' path = '/sports'/>
                <NavItem text = 'Entertainment' path = '/entertainment'/>
                <NavItem text = 'Technology' path = '/technology'/>
                <NavItem text = 'Science' path = '/science'/>
                <NavItem text = 'Health' path = '/health'/>
            </div>
        </div>
    );
}

export default NavBar;

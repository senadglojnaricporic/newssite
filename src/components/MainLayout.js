import React from 'react';


function MainLayout(props) {

    const style = {width: '80%', margin: 'auto'};

    return (
        <div style={style}>
            {props.children}
        </div>
    );
}

export default MainLayout;

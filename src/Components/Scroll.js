import React from 'react';

const Scroll = (props) => {
    
    return ( 
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div> );
    // return props.children will return the robots or what's inside the <scroll> tag
};

export default Scroll;
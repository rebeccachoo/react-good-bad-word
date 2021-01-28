import React from 'react';

const Input = (props) => { 

    return <input 
        type="text"  
        onChange={props.changed} 
        value={props.currentName} />;
};

export default Input;
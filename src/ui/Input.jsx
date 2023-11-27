import React from 'react';

const Input = ({value,setValue}) => {
    return (
        <div className="ui__input">
            <input type="text" value = {value} onChange={e=>setValue(e.target.value)}/>
        </div>
    );
};

export default Input;
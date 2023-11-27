import React from 'react';

const Input = ({value,setValue,placeholder}) => {
    return (
        <div className="ui__input">
            <input placeholder={placeholder} type="text" value = {value} onChange={e=>setValue(e.target.value)}/>
        </div>
    );
};

export default Input;
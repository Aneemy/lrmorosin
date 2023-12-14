import React, {useState} from 'react';

const Input = ({addNewTask}) => {
    const [input,setInput] = useState('')
    const handleClick = () =>{
        if (input!==''){
        addNewTask(input)
        setInput('')
        }
    }
    const handleEnterPress = (e) =>{
        if(e.key == 'Enter'){
            handleClick()
        }
    }
    return (
        <div onKeyPress={e=>handleEnterPress(e)} className='boards__input'>
            <input value = {input}  type="text" onChange = {e=>setInput(e.target.value)}/>
            <button onClick={() => handleClick()}>
                Добавить
            </button>
        </div>
    );
};

export default Input;
import React, {useState} from 'react';

const Input = ({addNewTask}) => {
    const [input,setInput] = useState('')
    const handleClick = () =>{
        if (input!==''){
        addNewTask(input)
        setInput('')
        }
    }
    return (
        <div className='boards__input'>
            <input value = {input}  type="text" onChange = {e=>setInput(e.target.value)}/>
            <button onClick={() => handleClick()}>
                Добавить задачку
            </button>
        </div>
    );
};

export default Input;
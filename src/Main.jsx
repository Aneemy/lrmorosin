import React, {useState} from 'react';
import Input from "./Input";
import Boards from "./Boards";
import Modal from "./Modal";

const Main = () => {
    const [boards,setBoards] = useState([
        {id:0,title:'ToDo',list:[{id:1,body:'Вытереть попу'}]},
        {id:1,title:'InProgress',list:[{id:2,body:'Помыть попу'}]},
        {id:2,title:'Done',list:[{id:3,body:'Покакать'}]}
    ])
    const [input,setInput] = useState('')
    const [active,setActive] = useState(false)
    const addNewTask = (task) =>{
        const newBoards = [...boards]
        ///Поисковичек айди
        newBoards[0].list.push({})
    }
    return (
        <div>
            <Input />
            <Boards boards = {boards} setBoards = {setBoards}/>
            <Modal active={active} setActive={setActive}/>
        </div>
    );
};

export default Main;
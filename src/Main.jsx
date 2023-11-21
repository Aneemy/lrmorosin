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
    const [active,setActive] = useState(false)
    const addNewTask = (task) =>{
        const findBiggestId = () =>{
            return Math.max(...boards.map(board =>board.list).flat().map(item =>item.id))
        }
        const newBoards = [...boards]
        const newId = findBiggestId()
        newBoards[0].list.push({id:newId,body:task})
        setBoards(newBoards)
    }
    const removeTask = (board,task) =>{
        const newBoards = [...boards]
        const boardId = boards.indexOf(board)
        const taskId = boards[boardId].list.indexOf(task)
        newBoards[boardId].list.splice(taskId,1)
        setBoards(newBoards)
    }
    const handleTaskMove = (prevBoard,newBoard) =>{
        let result = null
        setBoards(boards.map(b =>{
            if (b.id === prevBoard){
                result = prevBoard
            }
            else if (b.id === newBoard){
                result = newBoard
            }
            else
                result = b
            return result
        }))
    }
    const handleBoardMove = (prevBoard,newBoard) =>{

    }
    return (
        <div className="container">
            <Input addNewTask = {addNewTask} />
            <Boards boards = {boards} setBoards = {setBoards} removeTask = {removeTask} handleTaskMove = {handleTaskMove}
            handleBoardDrop = {handleBoardDrop}/>
            <Modal active={active} setActive={setActive}/>
        </div>
    );
};

export default Main;
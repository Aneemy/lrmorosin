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
            return Math.max(...boards.map(board =>board.list).flat().map(item =>item.id))+1
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
    const handleTaskDrop = (prevBoard,newBoard) =>{
        let result = null
        setBoards(boards.map(b =>{
            if (b.id === prevBoard.id){
                result = prevBoard
            }
            else if (b.id === newBoard.id){
                result = newBoard
            }
            else
                result = b
            return result
        }))
    }
    const moveTaskOnClick = (board,task,step) =>{
        const newBoards = [...boards]
        const boardIndex = boards.indexOf(board)
        const taskIndex = boards[boardIndex].list.indexOf(task)
        newBoards[boardIndex].list.splice(taskIndex,1)
        newBoards[boardIndex+step].list.push(task)
        setBoards(newBoards)
    }
    return (
        <div className="container">
            <Input addNewTask = {addNewTask} />
            <Boards boards = {boards} setBoards = {setBoards} removeTask = {removeTask} handleTaskDrop= {handleTaskDrop}
            moveTaskOnClick = {moveTaskOnClick}/>
            <Modal active={active} setActive={setActive}/>
        </div>
    );
};

export default Main;
import React,{useState} from 'react';
import {updateTask} from "./http/table";

const Boards = ({boards,setBoards,handleTaskDrop,removeTask,moveTaskOnClick}) => {
    const [currentTask,setCurrentTask] = useState(null)
    const [currentBoard,setCurrentBoard] = useState(null)
    function handleDragStart(board, task) {
        setCurrentTask(task)
        setCurrentBoard(board)
    }

    function handleDragEnd(e) {
    }

    function handleDragLeave(e) {
        e.target.style.background = 'white'
    }

    function handleDragOver(e) {
        e.preventDefault()
        e.target.style.background = 'lightgrey'
    }

    function handleDrop(e, board, task) {
        e.preventDefault()
        e.target.style.background = 'white'
        const currentDropIndex = board.list.indexOf(task)
        updateTask(task.id,{boardInd:boards.indexOf(board),position:currentDropIndex+1})
        board.list.splice(currentDropIndex+1,0,currentTask)
        const currentTaskIndex = currentBoard.list.indexOf(currentTask)
        currentBoard.list.splice(currentTaskIndex,1)
        handleTaskDrop(currentBoard,board)
    }
    function handleBoardDrop(e,board) {
        e.preventDefault()
        e.target.style.background = 'white'
        updateTask(currentTask.id,{boardInd:boards.indexOf(board),position:0})
        board.list.push(currentTask)
        const currentTaskIndex = currentBoard.list.indexOf(currentTask)
        currentBoard.list.splice(currentTaskIndex,1)
        handleTaskDrop(currentBoard,board)
    }

    return (
        <div className='boards'>
            {boards.map(board=>
            <div className='boards__elem' key={board.id}
                 onDragLeave={(e)=>e.target.style.background = 'white'}
                 onDragOver={(e)=>handleDragOver(e)}
                 onDrop={(e)=>handleBoardDrop(e,board)}
                 draggable={true}>
                {board.list.map(task=>
                <div className='boards__task' key={task.id}
                     onDragStart={(e)=>handleDragStart(board,task)}
                     onDragEnd={(e)=>handleDragEnd(e)}
                     onDragLeave={(e)=>handleDragLeave(e)}
                     onDragOver={(e)=>handleDragOver(e)}
                     onDrop={(e)=>handleDrop(e,board,task)}
                     draggable={true}
                    onDoubleClick ={()=>removeTask(board,task)}>
                    {boards.indexOf(board)>0 ?
                        <svg  onClick={()=>moveTaskOnClick(board,task,-1)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-arrow-left boards__arow" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    : null}
                    <div className='boards__tt' key={task.id}
                         onDragStart={(e)=>handleDragStart(board,task)}
                         onDragEnd={(e)=>handleDragEnd(e)}
                         onDragLeave={(e)=>handleDragLeave(e)}
                         onDragOver={(e)=>handleDragOver(e)}
                         onDrop={(e)=>handleDrop(e,board,task)}
                         draggable={true}
                         onDoubleClick ={()=>removeTask(board,task)}>
                    {task.body}
                    </div>
                    {boards.indexOf(board)<2 ?
                        <svg onClick={()=>moveTaskOnClick(board,task,1)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-arrow-right boards__arow" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                        : null}
                </div>)}
            </div>)}
        </div>
    );
};

export default Boards;
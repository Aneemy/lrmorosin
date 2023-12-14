import {URL} from './url'
import axios from "axios";
export async function addTask(pack){
    try {
        const token = localStorage.getItem('token')
        const response = await axios.post(URL+'/tasks',pack,
            {headers: {Authorization: `Bearer ${token}`}})
        if (response.status == 201) {
            console.log( response)
        }
        else{
            console.log(response)
        }
    }
    catch (e){
        console.error(e)
    }
}
export async function getAllTasks(userId = ''){
    try {
        const token = localStorage.getItem('token')
        const response = await axios.get(URL+`/tasks`,
            {headers: {Authorization: `Bearer ${token}`}})
        // const response = await axios.get(URL+`/table/${userId}`,
        //     {headers: {Authorization: `Bearer ${token}`}})
        if (response.status == 200) {
            console.log( response.data)
            return response.data
        }
        else{
            console.log(response)
        }
    }
    catch (e){
        console.error(e)
    }
}
export async function deleteTask(taskId){
    try {
        const token = localStorage.getItem('token')
        const response = await axios.delete(URL+`/tasks/${taskId}`,{headers: {Authorization: `Bearer ${token}`}})
        if (response.status == 200) {
            console.log( response)
        }
        else{
            console.log(response)
        }
    }
    catch (e){
        console.error(e)
    }
}
export async function updateTask(taskId,pack){
    try {
        const token = localStorage.getItem('token')
        const response = await axios.patch(URL+`/tasks/${taskId}`,pack,{headers: {Authorization: `Bearer ${token}`}})
        if (response.status == 200) {
            console.log( response.data)
        }
        else{
            console.log(response)
        }
    }
    catch (e){
        console.error(e)
    }
}
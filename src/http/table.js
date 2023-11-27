import {URL} from './url'
import axios from "axios";
export async function addTask(pack){
    try {
        const response = await axios.post(URL+'/table',pack)
        if (response.status == 200) {
            console.log( response.data)
        }
        else{
            alert(response)
        }
    }
    catch (e){
        console.error(e)
    }
}
export async function getAllTasks(userId){
    try {
        const response = await axios.get(URL+`/table/${userId}`)
        if (response.status == 200) {
            console.log( response.data)
        }
        else{
            alert(response)
        }
    }
    catch (e){
        console.error(e)
    }
}
export async function deleteTask(taskId){
    try {
        const response = await axios.delete(URL+`/table/${taskId}`)
        if (response.status == 200) {
            console.log( response)
        }
        else{
            alert(response)
        }
    }
    catch (e){
        console.error(e)
    }
}
export async function updateTask(taskId,pack){
    try {
        const response = await axios.patch(URL+`/table/${taskId}`,pack)
        if (response.status == 200) {
            console.log( response.data)
        }
        else{
            alert(response)
        }
    }
    catch (e){
        console.error(e)
    }
}
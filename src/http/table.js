import {URL} from './url'
import axios from "axios";
export async function addTask(pack){
    try {
        const response = await axios.post(URL+'/table',pack)
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
export async function getAllTasks(userId){
    try {
        console.log(123)
        const response = await axios.get(URL+`/table/${userId}`)
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
        const response = await axios.delete(URL+`/table/${taskId}`)
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
        const response = await axios.patch(URL+`/table/${taskId}`,pack)
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
import {URL} from './url'
import axios from "axios";
export async function registration(pack){
    try {
        const response = await axios.post(URL+'/auth/registration',pack)
        if (response.status == 201) {
            console.log( response.data)
            return response.data
        }
        else{
            alert(response)
        }
    }
    catch (e){
        console.error(e)
    }
}
export async function login(pack){
    try {
        const response = await axios.post(URL+'/auth/login',pack)
        if (response.status == 200) {
            console.log(response.data)
            return response.data
        }
        else{
            alert(response)
        }
    }
    catch (e){
        console.error(e)
    }
}
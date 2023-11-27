import React, {useEffect, useState} from 'react';
import Input from "./ui/Input";
import {login, registration} from "./http/auth";
import {jwtDecode} from "jwt-decode";

const Auth = ({changeUser}) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState(null)
    const [isLogin,setIsLogin] = useState(true)

    const refreshPage = (user)=> setTimeout(()=>changeUser(user),1500)
    const AuthForm = () =>{
        return(
            <div className="auth__content">
                <Input value={username} setValue={setUsername}/>
                <Input value={password} setValue={setPassword}/>
            </div>
        )
    }
    const sendRegReq =  async () =>{
        if (isLogin){
            setIsLogin(false)
        }
        else{
            const response = await registration({username,password})
            setMessage(response.message)
        }
    }
    const sendLogReg = async () =>{
        if (!isLogin){
            setIsLogin(true)
        }
        else{
            const response = await login({username,password})
            setMessage(response)
        }
    }
    const Message = () =>{
        if (message!==null){
        const tempMsg = message
        setMessage('')
        if (tempMsg.message!==null&& !tempMsg.token){
            return <div>
                Вы успешно зарегистрировались
            </div>
        }
        else if (typeof(tempMsg.token) === 'string' ){
            const data = jwtDecode(tempMsg.token)
            const user = data
            localStorage.setItem('token',tempMsg.token)
            refreshPage(user)
            return <div>
                {`Вы успешно авторизовались, ${user}`}
            </div>
        }
        return null
    }
        }

    return (
        <div className="auth__bg">
            <div className="auth__content">
                <Input value={username} setValue={setUsername} placeholder='Имя пользователя'/>
                <Input value={password} setValue={setPassword} placeholder='Пароль'/>
                <div className="auth__buttons">
                    <div className={!isLogin&&'active'} onClick={()=>sendRegReq()}>
                        Регистрация
                    </div>
                    <div className={isLogin&&'active'} onClick={()=>sendLogReg()}>
                        Логин
                    </div>
                </div>
                <Message/>
            </div>
        </div>
    );
};

export default Auth;
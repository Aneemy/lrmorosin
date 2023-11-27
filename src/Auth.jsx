import React, {useState} from 'react';
import Input from "./ui/Input";
import {login, registration} from "./http/auth";

const Auth = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [success,setSuccess] = useState(false)
    const [isLogin,setIsLogin] = useState(true)
    const AuthForm = () =>{
        return(
            <div className="auth__content">
                <Input value={username} setValue={setUsername}/>
                <Input value={password} setValue={setPassword}/>
            </div>
        )
    }
    const sendRegReq =  async () =>{
        const response = await registration({username,password})
    }
    const sendLogReg = async () =>{
        const response = await login({username,password})
    }

    return (
        <div className="auth__bg">
            <div className="auth__content">
                <Input value={username} setValue={setUsername}/>
                <Input value={password} setValue={setPassword}/>
                <div className="auth__buttons">
                    <div onClick={()=>sendLogReg()}>
                        Логин
                    </div>
                    <div onClick={()=>sendRegReq()}>
                        Регистрация
                    </div>
                </div>
                {success&&
                    <div>
                        Вы успешно зарегистрировались
                    </div>}
            </div>
        </div>
    );
};

export default Auth;
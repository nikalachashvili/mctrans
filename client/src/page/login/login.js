import React, { useState } from 'react'
import getApi from '../../http/getApi'

export const LoginPage = () => {
    const [reg, setReg] = useState({
        "email": "davit@gmail.com",
        "fullName": "დავით გელაშვილი",
        "password": "123456"
    })

    const [login, setLogin] = useState({
        "email": "davit@gmail.com",
        "password": "123456"
    })

    async function handleLogin(){
        try {
            const respons = await getApi.postData('/users/login', login)
            console.log(respons)
        } catch (error) {
            console.error(error)
        }
    }

    async function handleReg(){
        try {
            const respons = await getApi.postData('/users/register', reg)
            console.log(respons)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            <button onClick={()=>handleLogin()}>
                login
            </button>

            <button onClick={()=>handleReg()}>
                reg
            </button>
        </div>
    )
}

import React, { useState } from 'react'
import { CustomButton } from '../component/Common/CustomButton'
import CustomInput from './components/CustomInput/CustomInput'

export const AdminLogin = ({ setIsLogin }) => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    function LogIn() {
        if ((values.username === process.env.REACT_APP_ADMIN_USERNAME) && (values.password === process.env.REACT_APP_ADMIN_PASSWORD)) {
            setIsLogin(true)
        }
    }

    return (
        <div style={{
            maxWidth: '500px',
            width: '100%',
            margin: '100px auto',
            background: '#F9FBFC',
            backgroundColor: '#405FF2',
            padding: '40px 20px',
            borderRadius: '20px'
        }}>
            <CustomInput
                title="username"
                type="text"
                value={values?.username}
                name="username"
                placeholder="enter username"
                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
            />
            <CustomInput
                title="password"
                type="password"
                value={values?.password}
                name="password"
                placeholder="enter password"
                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
            />
            <CustomButton light>
                <p style={{
                    padding: '7px 22px'
                }}
                    onClick={LogIn}>Log in</p>
            </CustomButton>
        </div>
    )
}

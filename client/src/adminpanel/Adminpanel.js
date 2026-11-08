import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import CarsPage from './page/cars/cars'
import Sidebar from './components/Sidebar/Sidebar'
import TeamPage from './page/team'
import BlogPage from './page/blog'
import { AdminLogin } from './AdminLogin'

export default function Adminpanel() {
    const [isLogin, setIsLogin] = useState(false)
    
    useEffect(()=>{
        console.log('loged')
    }, [isLogin])

    return (
        <div className='adminpanel'>
            <div className='row'>
                {!isLogin ? (
                    <Routes>
                        <Route path='/*' element={<AdminLogin setIsLogin={setIsLogin}/>} />
                    </Routes>
                ) : (
                    <>
                        <div className='col-auto'>
                            <Sidebar />
                        </div>
                        <div className='col' style={{ maxWidth: '100%' }}>
                            <Routes>
                                <Route path='/' element={<h1>dashboard</h1>} />
                                <Route path='/cars*' element={<CarsPage />} />
                                <Route path='/teams*' element={<TeamPage />} />
                                <Route path='/blogs*' element={<BlogPage />} />
                            </Routes>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

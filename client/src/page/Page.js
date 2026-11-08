import React from 'react'
import { Route, Routes } from 'react-router'
import MainPage from './main/page'
import CarsPage from './cars/Cars'
import { Header } from '../component/Common/Header'
import { Footer } from '../component/Common/Footer'
import CalculatorPage from './calculator/page'
import { NewsPage } from './news/page'
import { VinPage } from './vin/page'
import { TeamsPage } from './teams/page'
import ContactPage from './contact/page'
import { LoginPage } from './login/login'

export default function Page() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/news/*' element={<NewsPage />} />
                <Route path='/cars' element={<CarsPage />} />
                <Route path='/teams' element={<TeamsPage />} />
                <Route path='/calculator' element={<CalculatorPage />} />
                <Route path='/vin' element={<VinPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
            <Footer />
        </>
    )
}

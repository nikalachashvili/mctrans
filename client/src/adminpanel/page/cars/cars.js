import React from 'react'
import { Route, Routes } from 'react-router'
import CarsList from '../../components/Cars/CarsList'
import AddCars from '../../components/Cars/AddCars'

export default function CarsPage() {
  return (
    <Routes>
      <Route path='/' element={<CarsList />} />
      <Route path='/:id' element={<AddCars />} />
      <Route path='/add' element={<AddCars />} />
    </Routes>
  )
}

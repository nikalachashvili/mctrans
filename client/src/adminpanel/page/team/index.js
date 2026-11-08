import React from 'react'
import { Route, Routes } from 'react-router'
import TeamList from '../../components/Team/List'
import AddTeam from '../../components/Team/Add'

export default function TeamPage() {
  return (
    <Routes>
      <Route path='/' element={<TeamList />} />
      <Route path='/:id' element={<AddTeam />} />
      <Route path='/add' element={<AddTeam />} />
    </Routes>
  )
}

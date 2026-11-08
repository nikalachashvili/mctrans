import React from 'react'
import { Route, Routes } from 'react-router'
import BlogList from '../../components/Blog/List'
import AddBlog from '../../components/Blog/Add'

export default function BlogPage() {
  return (
    <Routes>
      <Route path='/' element={<BlogList />} />
      <Route path='/:id' element={<AddBlog />} />
      <Route path='/add' element={<AddBlog />} />
    </Routes>
  )
}

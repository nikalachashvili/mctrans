import React from 'react'
import { News } from '../../component/News'
import { NewsDetailPage } from './detail'
import { Route, Routes } from 'react-router-dom'

export const NewsPage = () => {
  return (
    <Routes>
      <Route index element={<News />} />
      <Route path="/:id" element={<NewsDetailPage />} />
    </Routes>
  )
}

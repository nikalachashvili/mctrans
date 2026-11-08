import React from 'react'
import { MainSlider } from '../../component/MainSlider'
import { LoungeCars } from '../../component/LoungeCars'
import { RequestBox } from '../../component/RequestBox'
import { SalesManagers } from '../../component/SalesManagers'
import { LastBlog } from '../../component/LastBlog'
import { WhyUs } from '../../component/WhyUs'
import { Benefits } from '../../component/Benefits'
import AskedQuestions from '../../component/AskedQuestions'

export default function MainPage() {
  return (
    <>
    <MainSlider />
    <RequestBox />
    <LoungeCars />
    <Benefits />
    <SalesManagers />
    <LastBlog />
    <WhyUs />
    <AskedQuestions />
    </>
  )
}

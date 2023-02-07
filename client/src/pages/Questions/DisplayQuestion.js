import React from 'react'
import LeftSiderbar from '../../components/LeftSiderbar/LeftSiderbar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <LeftSiderbar />
      <div className='home-container-2'>
        <QuestionDetails />
        <RightSidebar />
      </div>
    </div>
  )
}

export default DisplayQuestion
import React from 'react'
import SideBar from './sideBar'
import Feed from './Feed'
import Suggestions from './Suggestions'

function App() {
  return (
    <div className='d-flex vh-100'>
      <div className='w-sb'><SideBar/></div>
      <div className='w-fe'><Feed/></div>
      <div className='w-su'><Suggestions/></div>
    </div>
  )
}

export default App
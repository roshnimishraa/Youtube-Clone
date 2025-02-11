import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar/>
{/* Either I have to show <MainContainer/> or <WatchPage/> */}
<Outlet/>
    </div>
  )
}

export default Body
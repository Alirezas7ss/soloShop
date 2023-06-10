"use client"
import React from 'react'
import { showSidebar } from '@/store/store'

function HamburgerMenu() {
  const showSide = showSidebar((state) => state.showSidebar)
  const setShowSidebar = showSidebar((state) => state.setShowSidebar)
  function clickHandler(){
    setShowSidebar(!showSide)
    // console.log(showSide)
  }
  
  return (
    <div className=''>
      {/* {showSide ? <button onClick={clickHandler}>close</button> :
         <button onClick={clickHandler}>menu</button>
      } */}
       <button className={`${showSide && 'cross rotate-90'} menu-button  `} onClick={clickHandler} >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
    </div>
  )
}

export default HamburgerMenu
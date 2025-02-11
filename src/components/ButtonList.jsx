import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All" />  
      <Button name="Gaming" />  
      <Button name="Songs" />  
      <Button name="Live" />  
      <Button name="Skills" />  
      <Button name="News" />  

    </div>
  )
}

export default ButtonList
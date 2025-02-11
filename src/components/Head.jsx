import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>

<div className='flex col-span-1 '>
      <img 
      className='h-8'
      alt="menu" 
      src="https://shorturl.at/15D54"
      />

      <img 
      className='h-8 mx-2'
      alt="youtube-logo"
      src="https://shorturl.at/SzJvh"
      />
    </div>

    <div 
    className='col-span-10 px-10'>
{/* search */}
<input 
className='w-1/2 text-center border border-gray-400 p-2 rounded-l-full'
type='text' />
<button 
className='border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100'
>
  {/* search */}
  🔍 
</button>
    </div>
 
 <div className='col-span-10'>
{/* user icon */}
<img 
className='h-8'
alt='user' 
src='https://shorturl.at/UvCII'
 />
 </div>

    </div>
  )
}

export default Head
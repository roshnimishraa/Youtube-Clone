import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img 
    className='rounded-lg'
        alt='thumbnail'
        src={thumbnails.standard.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
   
  )
}

// Higher Order Component
// export const AdVideoCard = (VideoCard) => {
//     return <div className='border boarder-red-900 p-1 m-1'>
//         <VideoCard/>
//         </div>
// }
export default VideoCard

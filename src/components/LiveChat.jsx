import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessages } from '../utils/helper';

const LiveChat = () => {
   const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    // subscribe to the messages
    const chatMessages = useSelector((store) => store.chat?.messages || []);

    // api polling for handling live chat 
    useEffect( () => {
     const i = setInterval(()=> {
           console.log("API Polling");

            // dispatch an action
            dispatch(addMessage(
                {
                    name:generateRandomName(),
                    message: makeRandomMessages(20) + "😊" ,
                }
            ));
        }, 200);

        return () => clearInterval(i);
    },[])

    // data storage/ update chats -> redux
  return (
    <>
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'
    >
        <div>
    {   //Note : Don't use indexes as keys 
    chatMessages.map((c,i) => (
        <ChatMessage
        key={i}
      name={c.name}
      message = {c.message}
      />
))}
</div>
    </div>

    <form className='w-full p-2 ml-2 border border-black'
     onSubmit={(e) => {
        e.preventDefault();
        console.log("ON Form Submit", liveMessage);
        dispatch(addMessage({
            name:"Roshni",
            message: liveMessage,
        }))
        // clear message after send
        setLiveMessage("");
     }}
    >
    <input
    className='px-2 w-96'
     type='text'
     value={liveMessage}
     onChange={(e) => {
        setLiveMessage(e.target.value)
     }}
    />
    <button>Send</button>
    <button className='px-2 mx-2 bg-green-100'></button>
</form>
    </>
  )
}

export default LiveChat
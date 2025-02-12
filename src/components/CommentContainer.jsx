import React from 'react'

const commentsData = [
    {
        name: "Roshni Mishra",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates veniam magnam. Fuga unde numquam provident magnam, sit nisi ratione iure iusto odit minus eos eveniet quibusdam architecto iste porro.",
        replies: [

        ]
    },
    {
        name: "Roshni Mishra",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates veniam magnam. Fuga unde numquam provident magnam, sit nisi ratione iure iusto odit minus eos eveniet quibusdam architecto iste porro.",
        replies: [
               {
                name: "Roshni Mishra",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates veniam magnam. Fuga unde numquam provident magnam, sit nisi ratione iure iusto odit minus eos eveniet quibusdam architecto iste porro.",
        replies: [

        ]
               }
        ]
    },
    {
        name: "Roshni Mishra",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates veniam magnam. Fuga unde numquam provident magnam, sit nisi ratione iure iusto odit minus eos eveniet quibusdam architecto iste porro.",
        replies: [

        ]
    },
    {
        name: "Roshni Mishra",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates veniam magnam. Fuga unde numquam provident magnam, sit nisi ratione iure iusto odit minus eos eveniet quibusdam architecto iste porro.",
        replies: [

        ]
    },
    {
        name: "Roshni Mishra",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates veniam magnam. Fuga unde numquam provident magnam, sit nisi ratione iure iusto odit minus eos eveniet quibusdam architecto iste porro.",
        replies: [

        ]
    },
    {
        name: "Roshni Mishra",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates veniam magnam. Fuga unde numquam provident magnam, sit nisi ratione iure iusto odit minus eos eveniet quibusdam architecto iste porro.",
        replies: [

        ]
    },
]

const Comment = ({data}) => {
    const {name,text,replies} = data;
   
    return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
         <img 
     className='w-12 h-12'     
    alt="user"
    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
    />

    <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>

    </div>
    </div>
    )
}

const CommentsList = ({comments}) => {
    // note: don't use indexes as keys
return comments.map((comment, index) => (
    <div key={index}>
    <Comment data = {comment} />
    <div className='pl-5 border border-l-black ml-5'>
     <CommentsList comments={comment.replies}/>
    </div>
    </div>
)
)
};

const CommentContainer = () => {

  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
     {/* <Comment data={commentsData[0]}/> */}
     <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentContainer
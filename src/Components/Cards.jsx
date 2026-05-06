import React from "react"

function Card({ title = 'not title', source = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsy5TIeNZs4osFM-JCB9lGTklwntIYvLO3ng&s' }) {
    return (<div className='w-2xs overflow-hidden border-blue-950 border-2 rounded-3xl flex flex-col bg-white'>
        <img className="h-48 object-center" src={source} alt="blogimg" />
        <div className='pt-2 pb-4'>
            <p className='text-xl text-purple-600 font-bold'>{title}</p>
            <p className=' text-gray-600 text-sm px-1 pb-2 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium non cupiditate natus modi sunt nostrum.</p>
            <button className='bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-blue-600 transition-colors'>Click me</button>
        </div>
    </div>)
}
export default Card
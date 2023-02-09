import React, {useEffect} from 'react'

import noteImg from '../assets/note-image.png'
import { useLazyQuery, useMutation } from '@apollo/client'
import { GET_NOTES } from '../graphql/Queries'

function Home() {
    useEffect(() =>{
        getNotes()
    },[])


    //call the get notes query from backend
    const [getNotes, {data, error}] = useLazyQuery(GET_NOTES)

    if(data){
        console.log(data)
    }


  return (
    <div className='flex'>
        {data && data.getNotes.map ( ( { _id, title, content, data}) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={noteImg} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
               
            </div>
        </div>
            
        ))}
        
    </div>
    


  )
}

export default Home
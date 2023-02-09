import React from 'react'
import {useLazyQuery} from "@apollo/client"
import { CHARACTERS } from './graphql/Queries'
import { useEffect, useState } from 'react'

export const Home = () => {
    const[characters,setcharacters] = useState("")

    useEffect( () => {
        getCharacters().then(response => {
            console.log('response from api',response)
            var data = response.data.characters.results
            setcharacters(data)
            console.log('data',data)
        })
    },[])



    const [getCharacters, {data, error}]= useLazyQuery(CHARACTERS)

    if(error) return <h1> Error {error}</h1>
    if(data) {
        console.log(data)
    }
  return (
    <div className ="bg-slate-100">
        {characters && 
            characters.map(( { id, name, gender,image}) => (
            <div data-id={id} >
                <img src={image} alt="imagen_character" />
                <h1>Name: <span> {name} </span> </h1>
                <p>Gender: <span> {gender} </span></p>
            </div>

            ))
           
        }
        
    </div>
  )
}

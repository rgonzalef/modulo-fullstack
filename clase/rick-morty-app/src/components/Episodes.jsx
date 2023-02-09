import React, { useEffect, useState } from 'react'
import {useLazyQuery} from "@apollo/client"
import { EPISODES } from './graphql/Queries'


export const Episodes = () => {
  const[episodes,setEpisodes] = useState("")

  useEffect( () => {
      getepisodes().then(response => {
          console.log('response from api',response)
          var data = response.data.episodes.results
          setEpisodes(data)
          //console.log('data',data)
      })
  },[])

  const [getepisodes, {data, error}]= useLazyQuery(EPISODES)

  if(error) return <h1> Error {error}</h1>
  if(data) {
      console.log(data)
  }
return (
  <div>
      {episodes && 
          episodes.map(( { id, episode, name, air_date}) => (
          <div data-id={id}>
              <h1>Name: <span> {name} </span> </h1>
              <p>Episode: <span> {episode} </span></p>
              <p>Air Date: <span> {air_date} </span></p>
              
          </div>

          ))
         
      }
      
  </div>
)
}


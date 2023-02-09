import { useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './App.css'
import { Home } from './components/Home'
import { Episodes } from './components/episodes'



function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://rickandmortyapi.com/graphql'
  })
  

  return (
  <ApolloProvider client={client}>
    <Home/>
    <Episodes/>
  </ApolloProvider>

  )
}

export default App

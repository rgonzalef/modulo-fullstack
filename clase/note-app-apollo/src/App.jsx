import './App.css'
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Form from './components/Form'
import NoteDetail from './components/NoteDetail'

function App() {
  const client = new ApolloClient({ //instancia del modulo client
    cache: new InMemoryCache(), //memoria interna dentro de la app q almacena las peticiones
    uri: "http://localhost:3000/" //conexción hacia el backend
  })
 

  return (
    <Router>
      <ApolloProvider client={client}>
      
      <Navbar/>

      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/create-note" element={<Form/>}></Route>
        <Route index element={<Login/>}></Route>
        <Route path="/note-detail" element={<NoteDetail/>}></Route>
      </Routes>

    </ApolloProvider>


    </Router>


    
  )
}

export default App

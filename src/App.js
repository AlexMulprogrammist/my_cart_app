import './App.css'
import React from 'react'
import Navbar from './components/navbar'
import CardContainer from './components/cardContainer'
import { useGlobalContext } from './context'

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className="loading">
        <h1>loading</h1>
      </div>
    )
  }
  
  return (
    <div className="App">
      <Navbar />
      <CardContainer />
    </div>
  )
}

export default App

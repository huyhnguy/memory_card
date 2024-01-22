import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Cards from './game'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Lion King Memory Game</h1>
    <p>Get points by clicking on an image but don't click on any more than once!</p>
    <Cards />
  </React.StrictMode>,
)

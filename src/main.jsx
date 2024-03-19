import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting } from './Greeting.jsx'
import './index.css'
import Person from './Person.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <Person />
  </React.StrictMode>,
)

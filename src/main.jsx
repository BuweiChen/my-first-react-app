import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting } from './Greeting.jsx'
import './index.css'
import List from './List.jsx'
import Counter from './Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <List />
    <Counter />
  </React.StrictMode>,
)

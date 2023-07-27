import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//React 18
createRoot(
  document.getElementById('root')
).render(
    <App />
)

//React 17 & 18 pero sin las cosas nuevas buenas
  /*ReactDOM.render(
    <App />,
  document.getElementById('root')
) */
 


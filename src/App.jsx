import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  //const [input, setInput] = useState('')

  console.log('render')
  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch('https://pokeapi.co/api/v2/pokemon/800')
    .then((res) => res.json())
    .then((resp) => {
      setResponse(resp)
      setLoading(false)
      setError(null)
    })
    .catch((error) => {
      setResponse(null)
      setLoading(false)
      setError(error)
    })
  }, [])
  return (
    <>
    {response?.name}
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
import { fetchUser } from './services/user'
import { useProfile } from './context/UserContext'


function App() {
  // inital value should match the data type of end value
  const { user, setUser } = useProfile({})

  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    
    <Layout >
      <Home />
    </Layout>
    
  )
}

export default App

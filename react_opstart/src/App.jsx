import { useState } from 'react'
import './styles/app/app.css'
import { Nav, Header, Footer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Header />
      <Footer />
    </>
  )
}

export default App

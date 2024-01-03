import { useState } from 'react'
import './styles/app/app.css'
import { Nav, Greeting, Footer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className='greeting'>
        <Greeting name="Et" />
        <Greeting name="To" />
        <Greeting name="Tre" />
      </div>
      <Footer />
    </>
  )
}

export default App

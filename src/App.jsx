import { useState } from 'react'
import './App.css'
import Information from './components/Information'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Studies from './components/Studies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-full">
			  <Information />
        <Contact />
        <Projects />
        <Studies />
		  </div>
    </>
  )
}

export default App

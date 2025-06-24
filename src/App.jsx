
import { useState } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement(e) {
    if(e.shiftKey && !e.ctrlKey) return 10
    if(e.ctrlKey && !e.shiftKey) return 100
    if(e.shiftKey && e.ctrlKey) return 1000
    return 1
  }
  return ( 
    <div className="counter">
      <h1 onClick={(e) => setCount(count + handleIncrement(e))}>Count: {count}</h1>
    </div>
  )
}

export default App
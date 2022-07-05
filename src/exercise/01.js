// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const counterReducer = (count, step) => count + step

function Counter({initialCount = 0, step = 2}) {
  const [count, setCount] = React.useReducer(counterReducer, initialCount)

  const increment = () => setCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

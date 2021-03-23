// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  if (action.type === 'step') {
    return {count: state.count + action.step}
  }
  // default state
  return state
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state
  const increment = () => setState({type: 'step', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

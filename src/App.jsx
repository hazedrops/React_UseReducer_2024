import React, { useState, useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default function App() {
  // useReducer( function, initial state - object('{ count: 0 }') is used here, generelly object is used with the useReducer )
  // state - state of object, if it's a single value we need to use 'count' variable here
  // dispatch - function called to update the state
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  // const [count, setCount] = useState(0)

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT }) // Just call dispatch function
  }
  // function increment() {
  //   setCount(prevCount => prevCount + 1)
  // }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT }) // Just call dispatch function
    // setCount((prevCount) => prevCount - 1)
  }

  // function decrement() {
  //   setCount((prevCount) => prevCount - 1)
  // }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

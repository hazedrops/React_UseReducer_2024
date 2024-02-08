import React, { useState, useReducer } from 'react'

function reducer(state, action) {
  return { count: state.count + 1 }
}

export default function App() {
  // useReducer( function, initial state - object('{ count: 0 }') is used here, generelly object is used with the useReducer )
  // state - state of object, if it's a single value we need to use 'count' variable here
  // dispatch - function called to update the state
  const [state, dispatch] = useReducer(reducer, { count: 0 }) 
  // const [count, setCount] = useState(0)

  function increment() {
    dispatch() // Just call dispatch function
  }
  // function increment() {
  //   setCount(prevCount => prevCount + 1)
  // }

  function decrement() {
    // setCount((prevCount) => prevCount - 1)
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

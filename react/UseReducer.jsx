import React, { useState } from 'react'

const reducer = (state, action)=> {
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1, text: state.text};
        case "Toggle":
            return {count:state.count, text: !state.text};
        case "BOTH":
            return {count:state.count+1, text: !state.text}    
        default:
            return state;       
    }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {count:0, text: true})  
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>{
            dispatch({type: "BOTH"});
        }}>click here</button>
        {state.text && <p>True</p>}

    </div>
  )
}

export default UseReducer

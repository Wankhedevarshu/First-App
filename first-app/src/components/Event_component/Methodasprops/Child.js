import React from 'react'

function Child(props) {
  return (
    <>
    <div>Child</div>
    <button onClick={props.Parenthandler('Child')}>Click Me</button>
    </>
  )
}

export default Child

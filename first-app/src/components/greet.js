import React from 'react'

function Greet(props) {
  const {name,courseName} = props;
  return (
    <div>
        <h1>Hello my name is {name} and my courseName is {courseName}</h1>
        {/* {props.children} */}
    </div>
  )
}

export default Greet;
import React from 'react'

function person({person}) {
  return (
    <>
    <div>person</div>
    <h3>My name is {person.name}. I am {person.age} Years old. My id is{person.id} and
    my course name is {person.Course}</h3>
   </>
  )
}

export default person
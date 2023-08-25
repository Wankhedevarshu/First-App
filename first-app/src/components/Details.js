import React from 'react'
import Person from './Person';

function Details() {
  const Persons = [{
    id: 11,
    name: "Shubham",
    age: 21,
    Course: "ReactJS"
  },
  {
    id: 12,
    name: "Chetan",
    age: 22,
    Course: "NodeJS"
  },
  {
    id: 13,
    name: "Shiv",
    age: 23,
    Course: "ReactJS"
  }
  ];

  const names = ["Ram", "Sham", "virat","Sham","varsha","snehal","mayuri"]

  const personList = Persons.map(person =>
    (<Person key={person.id} person={person} />)
  )

    const nameList = names.map((name,index) =>
      <h2 key={index}>{name}</h2>
      )

  // const name = ["John","Victor","Clark"]
  return (
    <>
      <div>
        {personList}
        {nameList}
      </div>

      {/* <h3>{name[0]}</h3>
    <h3>{name[1]}</h3>
    <h3>{name[2]}</h3> */}
    </>
  )
}

export default Details
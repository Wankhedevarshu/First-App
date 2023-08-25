import React, { Component } from 'react'

class welcome extends Component {
  render() {
    const {name,courseName} = this.props;
    return (
      <div>This is welcome class component
      <h1>Hello, my name is {name} and my course is {courseName} </h1>
      </div>
    )
  }
}

export default welcome
import React, { Component } from 'react'

 class Message extends Component {
  constructor() {
    super()
    this.state = {
        msg : 'Welcome to ReactJS'
    }
    this.click = this.click.bind(this)
  }
  click(){
    this.setState({
       msg : "Welcome to ReactJS Tutorial" 
    })
}
  render(){
    return (
        <>
      <h1>{this.state.msg}</h1>
      <button onClick={()=> this.click()}>Change</button>
      </>
    )
  }
}

export default Message

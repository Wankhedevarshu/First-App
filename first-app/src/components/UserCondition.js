import React, { Component } from 'react'

class UserCondition extends Component {
  constructor(props) {
    super(props)

    this.state = {
      logInn: true
    }
  }
  render() {

    // short circuit operator
    return this.state.logInn && <h2>Login Successful..!</h2>


    // Ternary operator
    // return (this.state.logInn) ? <h2>User conditional statement</h2> : <h2>Hello world..!</h2>


    // Element Variable
    // let text;
    // if (this.state.logInn) {
    //   text = <h2>User conditional statement</h2>
    // }
    // else {
    //   text = <h2>Hello world...!</h2>
    // }
    // return (<h1>{text}</h1>)

    // if else:
    // if(this.state.logInn){
    //   return <div>UserCondition Statement</div>
    // }
    // else{
    //   return <div>Hello world..!</div>
    // }
  }
}

export default UserCondition;
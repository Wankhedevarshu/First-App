import React, { Component } from 'react'

 class counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count : 0
    }
  }
  countdown(){
    this.setState({
      count : this.state.count+1
    })
    console.log(this.state.count);
  }
  render() {
    return (
      <>
      {/* <div>counter</div> */}
      <h3>Counter -{this.state.count} </h3>
      <button onClick={()=>this.countdown()}>Increment</button>
      </>
    )
  }
}

export default counter
import React, { Component } from 'react'
import Child from './Child'

class parentcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ParentName: "John"
        }
        this.parentOne = this.parentOne.bind(this)
    }
    parentOne(childdata) {
        alert(`Hello ${this.state.ParentName} from ${childdata}`)
        // alert("Hello" + this.state.ParentName)
    }
  render() {
    return (
        <>
        <div>
            <Child Parenthandler={this.parentOne} />
        </div>
    </>
    )
  }
}

export default parentcomponent
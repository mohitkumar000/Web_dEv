import React, { Component } from 'react'

export default class todo extends Component {
  constructor(){
    super();
    this.state={
      tasks:[{id:1,task:"revise js"},{id:2,task:"revise dsa-level1"},{id:3,task:"revise dsa-level1"}]
    }
  }
  render() {
    return (
      // <h1>Todo</h1>
      <div>
        <input type ="text"></input>
        <button>Submit</button>
        {
          this.state.tasks.map(function(taskobj){
            return (
              <li>
            <p>{taskobj.task}</p>
             <button>submit</button>
             </li>
            )
          })
        }
      </div>
    )
  }
}



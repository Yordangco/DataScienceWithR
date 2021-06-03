import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state={
            count: 0
        }
    }
    increaseCounter(){
      /* this.setState({
            count:this.state.count+1
        },()=>console.log('CallBack',this.state.count))*/
        this.setState((prevState)=>({
            count:prevState.count +1
        }), ()=> console.log('State value Callback',this.state.count))        
    }

    increaseFiveTimes(){
        for (var i = 0; i < 5; i++) {
            this.increaseCounter()
        } 
    }

    render() {
        return (
            <div>
                <div>Count- {this.state.count}</div>
                <button onClick={()=> this.increaseFiveTimes()}>Increase counter</button>
            </div>
        )
    }
}

export default Counter

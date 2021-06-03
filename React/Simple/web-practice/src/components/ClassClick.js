import React, { Component } from 'react'

class ClassClick extends Component {
    handleClick(){
        console.log('Click into class')
    }
    render() {
        return (
            <div>
               <button onClick={this.handleClick}>Click class</button> 
            </div>
        )
    }
}

export default ClassClick

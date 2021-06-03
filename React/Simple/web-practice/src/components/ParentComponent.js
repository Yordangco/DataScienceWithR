import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(){
        super()
        this.state={
            parentName:'Parent'
        }

        this.geetParent= this.geetParent.bind(this);
    }
    geetParent(parameters){
        alert(`Hello ${this.state.parentName} from ${parameters}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.geetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent

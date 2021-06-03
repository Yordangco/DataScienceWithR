import React,{Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome visitor"
        }
    }
    changeMessage(){
        this.setState({
            message: "Thank you for subscribing"
        })
    }
    render(){
        const {message}= this.state
        return (   
        <div>
        <h1>{message}</h1>
        <button onClick={()=>this.changeMessage()}>Subcribe</button>
        </div>
            )
    }
}

export default Message;
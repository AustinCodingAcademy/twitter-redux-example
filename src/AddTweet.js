import React, { Component } from 'react';



class AddTweet extends Component{
  state = {tweet:""}

  render(){
    return (
      <div>
      <input value={this.state.tweet} onChange={(e)=>{
        this.setState({tweet:e.target.value});
      }} /> 
      <button onClick={()=>{
        this.props.addTheTweet(this.state.tweet)
        this.setState({tweet:""})
      }}>Add</button>
      </div>
      )
  }
}

export default (AddTweet);

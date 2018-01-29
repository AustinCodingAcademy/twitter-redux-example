import React, { Component } from 'react';
import {addTweet} from "./actions";
import { connect } from 'react-redux';


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

function mapDispatchToProps(dispatch){
 return {
   addTheTweet:function(tweet){
     var action = addTweet(tweet);
     dispatch(action);
   }
 }
}
export default connect(null,mapDispatchToProps)(AddTweet);

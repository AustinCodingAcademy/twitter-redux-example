import React, { Component } from 'react';
import Tweets from "./Tweets";



function MiddleColumn(props){
  return <div><Tweets tweets={props.tweets}/></div>
}

export default MiddleColumn;
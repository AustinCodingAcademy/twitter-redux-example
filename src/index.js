import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import App from "./App";
import state from "./state";

function addTheTweet(tweet){
  state.tweets.push(tweet);
  renderApp();
}


function renderApp(){
  render( <App addTheTweet={addTheTweet} tweets={state.tweets} />, document.getElementById('root'));
}
renderApp();



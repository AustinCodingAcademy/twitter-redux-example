import React, { Component } from 'react';
import { render } from 'react-dom';
import MiddleColumn from "./MiddleColumn";
import AddTweet from "./AddTweet";

import './style.css';

function  App(props) {
    return (
      <div>
          <AddTweet />
          <MiddleColumn />
      </div>
    );
  
}

export default App;
import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import App from "./App";
import state from "./state";
import store from "./store";
import {Provider} from 'react-redux';


function renderApp(){
  render( <Provider store={store}><App /></Provider>, document.getElementById('root'));
}
renderApp();



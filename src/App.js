import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/Todo/TodoList'

import WeightDisplay from './Components/Weights/WeightDisplay'

import CalBoard from './Components/Calendar/CalBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoList/>

          <WeightDisplay/>

          <CalBoard/>
      </div>
    );
  }
}

export default App;

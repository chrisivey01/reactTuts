import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/Todo/TodoList'

import WeightDisplay from './Components/Weights/WeightDisplay'

import CalBoard from './Components/Calendar/CalBoard'

import Chess from './Components/Chess/GameBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoList/>

          <WeightDisplay/>

          <CalBoard/>

          <Chess/>

      </div>
    );
  }
}

export default App;

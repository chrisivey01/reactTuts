import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/Todo/TodoList'

import WeightDisplay from './Components/Weights/WeightDisplay'

import CalBoard from './Components/Calendar/CalBoard'

import Chess from './Components/Chess/GameBoard'

import Square from './Components/Calculator/Square'

import ChessGame from './Components/ChessGame/GameBoard'

import V2Chess from './Components/v2Chess/V2Chess'

class App extends Component {
  render() {
    return (
      <div className="App">
          <V2Chess/>

          <ChessGame/>

          <TodoList/>

          <WeightDisplay/>

          <CalBoard/>

          <Chess/>

          <Square/>
      </div>
    );
  }
}

export default App;
